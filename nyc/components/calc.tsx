import React from 'react'
import CalcButton from './calcButton'
import { useState } from 'react'
import { evaluate } from 'mathjs';

type Calculation = {
  expression: string
  result: number
}
type CalcProps = {
  expression: string
  setExpression: React.Dispatch<React.SetStateAction<string>>
  result: number | string
  setResult: React.Dispatch<React.SetStateAction<number | string>>
  history: Calculation[]
  setHistory: React.Dispatch<React.SetStateAction<Calculation[]>>
}

const Calc = ({
  expression,
  setExpression,
  result,
  setResult,
  history,
  setHistory
}: CalcProps) => {

  const [resultPressed, setResultPressed] = useState(false)

  const operators = ['+', '-', '*', '/', '×']

  const clear = () => {
    setExpression('')
    setResult(0)
    setResultPressed(false)
  }

  // Count unmatched opening brackets
  const getOpenBrackets = (text: string) => {
    let count = 0

    for (const char of text) {
      if (char === '(') count++
      if (char === ')') count--
    }

    return count
  }

  // Add numbers, operators and brackets
  const calcInput = (input: string) => {
    const isOperator = operators.includes(input)

    // Continue from the previous answer when an operator is pressed
    if (resultPressed) {
      if (isOperator && typeof result === 'number') {
        setExpression(String(result) + input)
        setResultPressed(false)
        return
      }

      // A number or opening bracket starts a new calculation
      if (!isOperator && input !== ')') {
        setExpression(input)
        setResult(0)
        setResultPressed(false)
        return
      }

      return
    }

    setExpression(prev => {
      const last = prev.slice(-1)
      const openBrackets = getOpenBrackets(prev)

      // Allow unary negative
      if (
        input === '-' &&
        (
          !prev ||
          last === '(' ||
          last === '×' ||
          last === '*' ||
          last === '/'
        )
      ) {
        return prev + '-'
      }

      // Reject consecutive operators
      if (isOperator) {
        if (!prev || operators.includes(last) || last === '(') {
          return prev
        }

        return prev + input
      }

      // Opening bracket
      if (input === '(') {
        // Insert multiplication for cases like 2(3)
        if (/\d|\)/.test(last)) {
          return prev + '×('
        }

        return prev + '('
      }

      // Closing bracket
      if (input === ')') {
        if (
          openBrackets <= 0 ||
          operators.includes(last) ||
          last === '(' ||
          !prev
        ) {
          return prev
        }

        return prev + ')'
      }

      // Decimal validation
      if (input === '.') {
        const currentNumber = prev.split(/[+\-×*/()]/).pop() || ''

        if (currentNumber.includes('.')) return prev

        if (!currentNumber) return prev + '0.'

        return prev + '.'
      }

      // Number input
      // Insert multiplication for cases like (2)3
      if (last === ')') {
        return prev + '×' + input
      }

      return prev + input
    })
  }

  // Delete last character
  const delInput = () => {
    if (resultPressed) {
      setResultPressed(false)
    }

    setExpression(prev => prev.slice(0, -1))
  }

  // Calculate result
  const showResult = () => {
    if (!expression.trim()) return

    // Don't evaluate incomplete expressions
    const last = expression.slice(-1)

    if (
      operators.includes(last) ||
      last === '(' ||
      getOpenBrackets(expression) !== 0
    ) {
      setResult('Error')
      setResultPressed(false)
      return
    }

    try {
      // Only allow characters used by this calculator
      if (!/^[0-9+\-×*/().\s]+$/.test(expression)) {
        throw new Error('Invalid expression')
      }

      const answer = evaluate(
        expression.replaceAll('×', '*')
      )

      if (typeof answer !== 'number' || !Number.isFinite(answer)) {
        throw new Error('Invalid result')
      }

      setResult(answer)
      setResultPressed(true)

      // Store completed calculation in session memory
      setHistory(prev => [
        ...prev,
        {
          expression,
          result: answer
        }
      ])

    } catch {
      setResult('Error')
      setResultPressed(false)
    }
  }

  return (
    <div className="
  w-full min-w-0 h-full
  flex items-center
  justify-center sm:justify-end
  px-4 sm:pl-2 sm:pr-8
  py-4 sm:py-0
">
      {/* container */}
      <div className="
  bg-app-surface
  border-2 border-app-bg
  flex flex-col items-center
  gap-4 p-4 sm:p-5
  rounded-3xl shadow-sm
  transition-shadow duration-200
  hover:shadow-2xl
  w-full max-w-[420px]
  h-[min(68dvh,560px)]
  sm:h-[min(80dvh,620px)]
">
        {/* screen */}
        <div className="
  w-full flex-[0_0_25%] min-h-0
  bg-app-bg rounded-3xl
  p-4 sm:p-5
  flex flex-col justify-between
  overflow-hidden
">
          {/* Expression */}
          <div className="text-right text-sm sm:text-lg text-app-text/60 truncate whitespace-nowrap">
            {expression}
          </div>

          {/* Result */}
          <div className="text-right text-3xl sm:text-4xl font-bold font-fredoka text-app-text truncate whitespace-nowrap">
            {result}
          </div>
        </div>
        {/* buttons */}
        <div className="
  w-full flex-1 min-h-0
  grid grid-cols-4 grid-rows-5
  gap-2
">
          {/* rows */}

          <CalcButton content="C" clickFunc={clear} hoverBgColor="hover:bg-[#FFF8F8]" textColor="text-brand" bgColor="bg-app-surface" />
          <CalcButton content="(" clickFunc={() => calcInput("(")} hoverBgColor="hover:bg-highlight" bgColor="bg-accent" hoverTextColor='hover:text-app-surface' />
          <CalcButton content=")" clickFunc={() => calcInput(")")} hoverBgColor="hover:bg-highlight" bgColor="bg-accent" hoverTextColor='hover:text-app-surface' />
          <CalcButton content="/" clickFunc={() => calcInput("/")} hoverBgColor="hover:bg-highlight" bgColor="bg-accent" hoverTextColor='hover:text-app-surface' />


          <CalcButton content="7" clickFunc={() => calcInput("7")} border='border border-solid border-app-surface' hoverTextColor='hover:text-app-surface' />
          <CalcButton content="8" clickFunc={() => calcInput("8")} border='border border-solid border-app-surface' hoverTextColor='hover:text-app-surface' />
          <CalcButton content="9" clickFunc={() => calcInput("9")} border='border border-solid border-app-surface' hoverTextColor='hover:text-app-surface' />
          <CalcButton content="×" clickFunc={() => calcInput("×")} hoverBgColor="hover:bg-highlight" bgColor="bg-accent" hoverTextColor='hover:text-app-surface' />


          <CalcButton content="4" clickFunc={() => calcInput("4")} border='border border-solid border-app-surface' hoverTextColor='hover:text-app-surface' />
          <CalcButton content="5" clickFunc={() => calcInput("5")} border='border border-solid border-app-surface' hoverTextColor='hover:text-app-surface' />
          <CalcButton content="6" clickFunc={() => calcInput("6")} border='border border-solid border-app-surface' hoverTextColor='hover:text-app-surface' />
          <CalcButton content="-" clickFunc={() => calcInput("-")} hoverBgColor="hover:bg-highlight" bgColor="bg-accent" hoverTextColor='hover:text-app-surface' />


          <CalcButton content="1" clickFunc={() => calcInput("1")} border='border border-solid border-app-surface' hoverTextColor='hover:text-app-surface' />
          <CalcButton content="2" clickFunc={() => calcInput("2")} border='border border-solid border-app-surface' hoverTextColor='hover:text-app-surface' />
          <CalcButton content="3" clickFunc={() => calcInput("3")} border='border border-solid border-app-surface' hoverTextColor='hover:text-app-surface' />
          <CalcButton content="+" clickFunc={() => calcInput("+")} hoverBgColor="hover:bg-highlight" bgColor="bg-accent" hoverTextColor='hover:text-app-surface' />


          <CalcButton content="del" clickFunc={delInput} hoverBgColor="hover:bg-[#FFF8F8]" textColor="text-brand" bgColor="bg-app-surface" />
          <CalcButton content="0" clickFunc={() => calcInput("0")} border='border border-solid border-app-surface' hoverTextColor='hover:text-app-surface' />
          <CalcButton content="." clickFunc={() => calcInput(".")} hoverBgColor="hover:bg-highlight" bgColor="bg-accent" hoverTextColor='hover:text-app-surface' />
          <CalcButton content="=" clickFunc={showResult} hoverBgColor="hover:bg-highlight" bgColor="bg-brand" hoverTextColor='hover:text-app-surface' />


        </div>
      </div>
    </div>
  )
}

export default Calc