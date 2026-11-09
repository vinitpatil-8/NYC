import React from 'react'
import Header from '../components/header'
import Calc from '../components/calc'
import Roast from '../components/roast'

const App = () => {
  return (
    <div className="app-background w-full flex flex-col overflow-x-hidden">

      <Header />

      <main className="flex-1 min-h-0 w-full grid grid-cols-1 sm:grid-cols-2">

        {/* Roast: first on mobile, right column on larger screens */}
        <section className="
          order-1 sm:order-2
          h-20 sm:h-full
          min-w-0 w-full
          flex items-center justify-center
          overflow-hidden
        ">
          <Roast />
        </section>

        {/* Calculator: second on mobile, left column on larger screens */}
        <section className="
          order-2 sm:order-1
          min-w-0 w-full
          flex items-center justify-center
          sm:justify-end sm:pr-6 md:pr-10
          py-4 sm:py-0
        ">
          <Calc />
        </section>

      </main>
    </div>
  )
}

export default App