import { useState, useEffect } from 'react'
import { ComicText } from "./comicText"

const roast = ({ expression, result, history }) => {

  function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }


  const initialStates = ['Go on, use it !', 'Hola !', "C'mon, just calculate ur stuff", "Couldn't Solve it urself huh ?", "Try me !", "Better calc than the one you have :)", "Here to ROAST you ;)"]

  const Roastlines = [
    "You really needed a calculator for that?!",
    "Seriously? What are you, 5 years old?",
    "Your fingers and toes were right there, you know.",
    "I have a gigahertz processor and you're making me do *this*?",
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
  ];

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
];

const smallNumberResult = [ // For results between -10 and 10 (excluding 0)
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
];

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
];

  const [roast, setRoast] = useState(() => getRandom(initialStates))



  // tags - 
  // Roast
  // MildRoast
  // SpecialRoast
  // ErrorRoast
  // NonRoast

  // Roast - multiple of 10 (under 100), multiple of 100 (under 1000), multiple of 1000 (under 10000)...
  // Roast - under 10 answer
  // MildRoast - multiple of 5 division under 100
  // MildRoast - any division, multiplication by 2
  // Roast - division by 1, 10 or multiple of 10 or multiplication by 1 or multiple of 10
  // 67, 51 and 69 reference

  // Non - roast
  // go on i dont have anything to say to u
  // Oh u looking to get roasted ?
  // Rain check...
  // Hello, Euclid
  // What are you ? A commerce student ?
  // Trying to match balance sheets ?

  function decider(result, expression) {

  if (result === 0) {
    setRoast(getRandom(zeroResult))
  }

}

  useEffect(() => {
  if (history.length === 0) return

  const latestCalculation = history[history.length - 1]

  decider(latestCalculation.result, latestCalculation.expression)

}, [history.length])


  return (
    <div className='sm:w-[50vw] w-[100vw]'>
      <ComicText>
        {roast}
      </ComicText>
    </div>


  )
}

export default roast
