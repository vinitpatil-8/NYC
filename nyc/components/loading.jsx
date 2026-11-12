import React from 'react'
import FuzzyText from './FuzzyText'

const loading = () => {
  return (
    <div className='h-[100vh] w-full flex flex-col gap-4 justify-center items-center'>
      <FuzzyText
          className="font-lucky tracking-wide"
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
          fontSize="clamp(32px, 6vw, 72px)"
        >
          NYC
        </FuzzyText>
        <p className='sm:text-lg text-[14px]' >Try Calculating Something Easy !</p>
    </div>
  )
}

export default loading
