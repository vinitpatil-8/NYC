import React from 'react'
import Header from '../components/header'
import Calc from '../components/calc'
import Mascot from '../components/mascot'

const App = () => {
  return (
    <div className='bg-[#FFF8F8] h-[100vh] w-[100vw] flex flex-col md:gap-0 gap-12'>
      <Header />
      <div className='h-[70vh] flex w-full sm:flex-row flex-col-reverse bg-red-300'>
        <Calc />
        <Mascot />
      </div>
    </div>
  )
}

export default App