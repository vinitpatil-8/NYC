import React from 'react'
import FuzzyText from './FuzzyText';
import { EyeTracking } from "./eyes";

const header = () => {
  return (
    <div className='md:h-40 sm:h-38 h-20 w-full flex items-center'>
      <div className='flex z-10 flex-col items-center md:h-28 sm:h-25 h-15 w-fit'>
        <FuzzyText className='font-lucky flex items-center tracking-wide'
          colorSplit={0}
          trigger="hover"
          direction="horizontal"
          baseIntensity={0}
          hoverIntensity={0.1}
          fuzzRange={30}
          sliceSize={1}
          fps={60}
          transitionDuration={0}
          intro
          introDuration={1400}
          letterSpacing={2}
          enableHover
          clickEffect={false}
          glitchMode={false}
          glitchInterval={2000}
          glitchDuration={200}
          fontSize="clamp(36px, 7vw, 72px)"
        >
          NYC
        </FuzzyText>


        <FuzzyText className='font-fredoka font-semibold flex items-end'
          colorSplit={0}
          trigger="hover"
          direction="horizontal"
          baseIntensity={0}
          hoverIntensity={0.1}
          fuzzRange={30}
          sliceSize={1}
          fps={60}
          transitionDuration={0}
          intro
          introDuration={1400}
          letterSpacing={0}
          enableHover
          clickEffect={false}
          glitchMode={false}
          glitchInterval={2000}
          glitchDuration={200}
          fontSize="clamp(14px, 2.5vw, 24px)"
        >
          Not Your Calc
        </FuzzyText>

      </div>
      <div className='flex w-[100vw] absolute justify-center'>
        <EyeTracking eyeSize={90} blinkInterval={0} gap={50} />
      </div>
      
    </div>
  )
}

export default header
