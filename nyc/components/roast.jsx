import { useEffect, useState } from 'react'
import { ComicText } from "./comicText"

// ----------------------------------
// 1. MESSAGE COLLECTIONS
// ----------------------------------

const initialStates = [
  'Go on, use it !',
  'Hola !',
  "C'mon, just calculate ur stuff",
  "Couldn't Solve it urself huh ?",
  "Try me !",
  "Better calc than the one you have :)",
  "Here to ROAST you ;)"
]

const Roastlines = [
  "You really needed a calculator for that?!",
  "Seriously? What are you, 5 years old?",
  "Your fingers and toes were right there, you know.",
  "I have a gigahertz processor and you're making me do this?",
  "A literal potato could have solved that in its head.",
  "I'm embarrassed for the both of us right now.",
  "Did you even try, or did your brain just take the day off?",
  "Hold on, let me dumb myself down to your level first.",
  "Your math teacher is weeping somewhere.",
  "Are you testing if my buttons work, or is this a genuine cry for help?",
  "I've seen golden retrievers do harder math than this.",
  "Please tell me you're just double-checking.",
  "Blink twice if you forgot how numbers work.",
  "Congratulations, you just wasted three milliseconds of my battery life.",
  "Even an abacus would feel insulted right now.",
  "Do you want me to draw it out with crayons for you too?",
  "I'm a calculator, not a babysitter for your last two brain cells.",
  "That took more effort to type than it would have to just think.",
  "I'm going to pretend you didn't just ask me that.",
  "Are we doing math or just pressing shiny buttons today?"
]

const zeroResult = [
  "All that for a ZERO?!",
  "That's ur IQ.",
  "Congratulations, you just calculated your bank balance.",
  "A whole lot of nothing. Just like your search history.",
  "You really needed my help to find out you have zero?",
  "Nothing. Nada. Zilch. Why are we even here?",
  "The exact number of people impressed by your math skills.",
  "Wow, all that typing for literally nothing.",
  "Matches your chances of passing a math test.",
  "Zero. Just like the effort you put into doing this in your head."
]

const smallNumberResult = [
  "You have ten fingers. Use them.",
  "Single digits? Really? Are we in kindergarten?",
  "I didn't go to silicon school for this.",
  "If you can count it on one hand, don't bother me.",
  "Oh look, a tiny number for a tiny brain.",
  "Even a toddler could count this high.",
  "Negative numbers? Just like your aura right now.",
  "Below zero? Just like your motivation to think.",
  "Did you seriously pull out a calculator for a single-digit answer?",
  "Hold on, let me get my magnifying glass to see that tiny result."
]

const errorResult = [
  "Did you just smash your face onto the keyboard?",
  "Syntax Error: Your brain is not responding.",
  "I'm a calculator, not a miracle worker. Type real math.",
  "You broke it. Are you happy now? Learn how numbers work.",
  "Even I don't know what garbage you just typed.",
  "Dividing by zero? Trying to destroy the universe or just being dumb?",
  "Error 404: Math skills not found.",
  "Please step away from the keyboard before you hurt yourself.",
  "That's not even math, that's just a cry for help.",
  "I refuse to process whatever nonsense you just entered."
]

const specialResult = [
  "67?! I see what you did there.",
  "51? That's suspiciously specific.",
  "69. A person of culture, I see.",
  "I'm not even going to comment on that number.",
  "Nice number. Very subtle.",
  "You definitely knew what you were doing."
]

const mildRoastResult = [
  "Okay, I'll give you that one. Barely.",
  "Not terrible. Don't let it get to your head.",
  "I expected worse, honestly.",
  "I'll let you have this one.",
  "A little effort! We're making progress.",
  "Fine. That wasn't completely embarrassing.",
  "You get a tiny amount of respect for that."
]

const divisionByFive = [
  "Dividing by 5? Need a little help with your tables?",
  "A multiple of five? How wonderfully convenient.",
  "Halfway between thinking and not thinking, apparently.",
  "I'll call that acceptable. Barely."
]

const doubleMultiplication = [
  "Times two? Just double it in your head!",
  "Multiplication by two. Groundbreaking.",
  "You could have literally doubled it.",
  "Two times the number, half the effort."
]

const simpleOperationRoast = [
  "That calculation was practically a warm-up.",
  "Your brain called in sick today?",
  "I'm starting to think you're doing this for entertainment.",
  "A calculator for THAT? Seriously?",
  "Please tell me you're just testing the buttons.",
  "This is what technology has come to?",
  "I deserve better calculations than this."
]

const roundedResult = [
  "Wow. A beautifully round number. How original.",
  "Even the number is taking the easy route.",
  "So satisfyingly round. Unlike your study schedule.",
  "A nice round answer. Did you plan that?",
  "The number is cleaner than your calculation process."
]

const operationRoast = [
  "Multiplying by one? You're literally changing nothing.",
  "Dividing by one? A truly challenging experience.",
  "Multiplying by ten. Revolutionary mathematics.",
  "Dividing by ten? Let me applaud this achievement.",
  "You made me do that just to move a decimal?"
]

const nonRoast = [
  "Okay, I'll stay quiet this time.",
  "Fair enough. Carry on.",
  "Not bad. I'll allow it.",
  "Hello, Euclid!",
  "Rain check... I'll roast you next time.",
  "Go on, I don't have anything to say to you.",
  "Look at you doing actual mathematics.",
  "No roast today. Enjoy the peace.",
  "Oh, you're looking to get roasted?",
  "That was respectable. Don't get used to it."
]


// ----------------------------------
// 2. HELPER FUNCTIONS
// ----------------------------------

// Pick one random message from an array.

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// The roast engine sends both the message and the eyes' expression to App.
function createReaction(lines, mood) {
  return {
    message: getRandom(lines),
    mood
  }
}


// Check whether a number is a multiple of 10.

function isMultipleOfTen(number) {
  return (
    number !== 0 &&
    Number.isInteger(number) &&
    Math.abs(number) % 10 === 0
  )
}


// Check whether a number is a multiple of 5.
// A small tolerance helps with decimal calculations.

function isMultipleOfFive(number) {
  const value = Math.abs(number) / 5

  return Math.abs(value - Math.round(value)) < 0.0000001
}


// Identify a simple calculation with two operands.
// Examples: 5+5, 10×2, 20/5, 8-3.

function getSimpleOperation(expression) {

  const pattern =
    /^\s*(-?(?:\d+(?:\.\d*)?|\.\d+))\s*([+*/×-])\s*(-?(?:\d+(?:\.\d*)?|\.\d+))\s*$/

  const match = expression.match(pattern)

  if (!match) return null

  return {
    first: Number(match[1]),
    operator: match[2],
    second: Number(match[3])
  }
}


// Check rounded milestone results:
// 10, 20, 100, 300, 1000, 5000, etc.

function isRoundedMilestone(number) {

  const value = Math.abs(number)

  if (value < 10) return false

  const unit = Math.pow(10, Math.floor(Math.log10(value)))

  const nearestMultiple = Math.round(value / unit) * unit

  return Math.abs(value - nearestMultiple) < 0.0000001
}


// ----------------------------------
// 3. THE MAIN DECISION ENGINE
// ----------------------------------

function decider(result, expression) {

  // ERROR ROAST

  if (result === 'Error') {
    return createReaction(errorResult, "error")
  }

  if (typeof result !== 'number' || !Number.isFinite(result)) {
    return createReaction(errorResult, "error")
  }


  // Extract the operands if this is a simple calculation.

  const operation = getSimpleOperation(expression)


  // SPECIAL ROAST: 67, 51 and 69

  const specialNumbers = [67, 51, 69]

  const numbersInExpression =
    (expression.match(/\d+(?:\.\d+)?/g) || []).map(Number)

  const containsSpecialNumber = [
    Math.abs(result),
    ...numbersInExpression.map(Math.abs)
  ].some(number => specialNumbers.includes(number))

  if (containsSpecialNumber) {
    return createReaction(specialResult, "special")
  }


  // ZERO ROAST

  if (result === 0) {
    return createReaction(zeroResult, "roast")
  }


  // OPERATION-BASED ROASTS

  if (operation) {

    const { first, operator, second } = operation

    // Multiplication by 1 or a multiple of 10.

    if (
      (operator === '×' || operator === '*') &&
      (
        Math.abs(first) === 1 ||
        Math.abs(second) === 1 ||
        isMultipleOfTen(first) ||
        isMultipleOfTen(second)
      )
    ) {
      return createReaction(operationRoast, "roast")
    }


    // Division by 1 or a multiple of 10.

    if (
      operator === '/' &&
      (
        Math.abs(second) === 1 ||
        isMultipleOfTen(second)
      )
    ) {
      return createReaction(operationRoast, "roast")
    }


    // Division resulting in a multiple of 5 under 100.

    if (
      operator === '/' &&
      Math.abs(result) < 100 &&
      isMultipleOfFive(result)
    ) {
      return createReaction(divisionByFive, "mild")
    }


    // Any other division gets a mild roast.

    if (operator === '/') {
      return createReaction(mildRoastResult, "mild")
    }


    // Multiplication by 2 gets a mild roast.

    if (
      (operator === '×' || operator === '*') &&
      (Math.abs(first) === 2 || Math.abs(second) === 2)
    ) {
      return createReaction(doubleMultiplication, "mild")
    }

  }


  // SMALL NUMBER ROAST: between -10 and 10, excluding zero.

  if (Math.abs(result) < 10) {
    return createReaction(smallNumberResult, "roast")
  }


  // ROUNDED RESULT ROAST.

  if (isRoundedMilestone(result)) {
    return createReaction(roundedResult, "roast")
  }


  // GENERAL ROAST FOR VERY SIMPLE CALCULATIONS.

  if (
    operation &&
    Math.abs(operation.first) <= 10 &&
    Math.abs(operation.second) <= 10
  ) {
    return createReaction(simpleOperationRoast, "roast")
  }


  // NON-ROAST: nothing matched.

  return createReaction(nonRoast, "calm")
}


// ----------------------------------
// 4. REACT COMPONENT
// ----------------------------------

const Roast = ({ history, onMoodChange }) => {

  const [roast, setRoast] = useState(
    () => getRandom(initialStates)
  )


  useEffect(() => {

    // Keep the welcome message until the first calculation.

    if (!history || history.length === 0) return

    // Get the latest calculation from history.

    const latestCalculation = history[history.length - 1]

    // Ask the decision engine for a roast.

    const reaction = decider(
      latestCalculation.result,
      latestCalculation.expression
    )

    setRoast(reaction.message)
    onMoodChange?.(reaction.mood)

  }, [history, onMoodChange])


  return (
    <div className='sm:w-[50vw] w-[100vw]'>
      <ComicText>
        {roast}
      </ComicText>
    </div>
  )

}

export default Roast