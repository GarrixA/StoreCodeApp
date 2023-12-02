import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Guide from './Components/Guide'
import Footer from './Components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-slate-300'>
      <Navbar/>
      <Home/>
      <Guide/>
      <Footer/>
    </div>
    </>
  )
}

export default App
