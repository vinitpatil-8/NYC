import React from 'react'
import CalcButton from './calcButton'
import { useState } from 'react'
import { evaluate } from 'mathjs';

type Calculation = {
  expression: string
  result: number
}

const calc = () => {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState<number | string>(0)
  const [resultPressed, setResultPressed] = useState(false)
  const [history, setHistory] = useState<Calculation[]>([])

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
    <div className='sm:w-[50vw] w-[100vw] sm:h-[80vh] h-[70vh] flex items-center justify-end'>
      {/* container */}
      <div className='bg-app-surface border-2 border-solid border-app-bg hover:shadow-2xl flex flex-col py-5 items-center gap-5 justify-center hover:mb-1 transition-all duration-200 rounded-3xl h-[95%] shadow-sm w-[85%] max-w-[420px]'>
        {/* screen */}
        <div className='w-[90%] h-[25%] bg-app-bg rounded-3xl p-5 flex flex-col justify-between overflow-hidden'>
          {/* Expression */}
          <div className="text-right text-lg text-app-text/60">
            {expression}
          </div>

          {/* Result */}
          <div className="text-right text-4xl font-bold font-fredoka text-app-text truncate">
            {result}
          </div>
        </div>
        {/* buttons */}
        <div className='w-[90%] h-[75%] flex flex-col justify-between'>
          {/* rows */}
          <div className='flex flex-row w-full h-[20%] justify-between'>
            <CalcButton content="C" clickFunc={clear} hoverBgColor="hover:bg-app-bg" textColor="text-brand" bgColor="bg-app-surface" />
            <CalcButton content="(" clickFunc={() => calcInput("(")} hoverBgColor="hover:bg-highlight" bgColor="bg-accent" />
            <CalcButton content=")" clickFunc={() => calcInput(")")} hoverBgColor="hover:bg-highlight" bgColor="bg-accent" />
            <CalcButton content="/" clickFunc={() => calcInput("/")} hoverBgColor="hover:bg-highlight" bgColor="bg-accent" />
          </div>
          <div className='flex flex-row w-full h-[20%] justify-between'>
            <CalcButton content="7" clickFunc={() => calcInput("7")} border='border border-solid border-app-surface' />
            <CalcButton content="8" clickFunc={() => calcInput("8")} border='border border-solid border-app-surface' />
            <CalcButton content="9" clickFunc={() => calcInput("9")} border='border border-solid border-app-surface' />
            <CalcButton content="×" clickFunc={() => calcInput("×")} hoverBgColor="hover:bg-highlight" bgColor="bg-accent" />
          </div>
          <div className='flex flex-row w-full h-[20%] justify-between'>
            <CalcButton content="4" clickFunc={() => calcInput("4")} border='border border-solid border-app-surface' />
            <CalcButton content="5" clickFunc={() => calcInput("5")} border='border border-solid border-app-surface' />
            <CalcButton content="6" clickFunc={() => calcInput("6")} border='border border-solid border-app-surface' />
            <CalcButton content="-" clickFunc={() => calcInput("-")} hoverBgColor="hover:bg-highlight" bgColor="bg-accent" />
          </div>
          <div className='flex flex-row w-full h-[20%] justify-between'>
            <CalcButton content="1" clickFunc={() => calcInput("1")} border='border border-solid border-app-surface' />
            <CalcButton content="2" clickFunc={() => calcInput("2")} border='border border-solid border-app-surface' />
            <CalcButton content="3" clickFunc={() => calcInput("3")} border='border border-solid border-app-surface' />
            <CalcButton content="+" clickFunc={() => calcInput("+")} hoverBgColor="hover:bg-highlight" bgColor="bg-accent" />
          </div>
          <div className='flex flex-row w-full h-[20%] justify-between'>
            <CalcButton content="del" clickFunc={delInput} hoverBgColor="hover:bg-app-bg" textColor="text-brand" bgColor="bg-app-surface" />
            <CalcButton content="0" clickFunc={() => calcInput("0")} border='border border-solid border-app-surface' />
            <CalcButton content="." clickFunc={() => calcInput(".")} hoverBgColor="hover:bg-highlight" bgColor="bg-accent" />
            <CalcButton content="=" clickFunc={showResult} hoverBgColor="hover:bg-highlight" bgColor="bg-brand" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default calc