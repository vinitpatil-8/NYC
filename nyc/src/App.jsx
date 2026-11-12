import { useState, useEffect } from 'react'
import Header from '../components/header'
import Calc from '../components/calc'
import Roast from '../components/roast'
import Footer from '../components/footer'
import LoadingScreen from '../components/loading'
import { AnimatePresence, motion } from 'motion/react'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState(0)
  const [history, setHistory] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
  <AnimatePresence mode="wait">
    {isLoading ? (
      <motion.div
        key="loading"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="min-h-screen"
      >
        <LoadingScreen />
      </motion.div>
    ) : (
      <motion.div
        key="app"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="app-background w-full min-h-screen flex flex-col overflow-x-hidden"
      >

      <Header />

      <main className="flex-1 min-h-0 w-full grid grid-cols-1 sm:grid-cols-2">

        <section className="
          order-1 sm:order-2
          h-20 sm:h-full
          min-w-0 w-full
          flex items-center justify-center
          overflow-hidden
        ">
          <Roast
            expression={expression}
            result={result}
            history={history}
          />
        </section>

        <section className="
          order-2 sm:order-1
          min-w-0 w-full
          flex items-center justify-center
          sm:justify-end sm:pr-6 md:pr-10
          py-4 sm:py-0
        ">
          <Calc
            expression={expression}
            setExpression={setExpression}
            result={result}
            setResult={setResult}
            history={history}
            setHistory={setHistory}
          />
        </section>

      </main>
      <Footer />
      </motion.div>
    )}
  </AnimatePresence>
)
}

export default App
