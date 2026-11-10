import React from 'react'
import FuzzyText from './FuzzyText'
import { EyeTracking } from './eyes'

const Header = ({ isDark, onToggleTheme }) => {
  return (
    <header className="
      relative flex items-center
      w-full h-20 sm:h-28 md:h-36
      px-4 sm:px-6
      shrink-0
    ">

      {/* Logo */}
      <div className="
        relative z-10
        flex flex-col items-center
        w-fit shrink-0
      ">

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

        <FuzzyText
          className="font-fredoka font-semibold"
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
          fontSize="clamp(12px, 2vw, 24px)"
        >
          Not Your Calc
        </FuzzyText>

      </div>

      {/* Eyes */}
      <div className="
  absolute inset-y-0 right-3
  flex items-center z-0
  sm:inset-0 sm:justify-center
">
        <div className="
          scale-[0.45]
          sm:scale-[0.7]
          md:scale-100
          pointer-events-auto
        ">
          <EyeTracking
            eyeSize={window.innerWidth < 640 ? 80 : 90}
            gap={window.innerWidth < 640 ? 20 : 50}
            blinkInterval={0}
          />
        </div>
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="absolute right-4 top-3 z-20 rounded-full px-3 py-2 font-fredoka font-semibold shadow-md transition-transform hover:scale-105"
          style={{
            backgroundColor: 'var(--surface-col)',
            color: 'var(--text-col)',
            border: '1px solid var(--grid-line)'
          }}
        >
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

    </header>
  )
}

export default Header
