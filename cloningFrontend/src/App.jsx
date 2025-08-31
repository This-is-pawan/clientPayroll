import React from 'react'
import Sidebar from './components/Sidebar'
import { Navbar } from './components/Navbar'
import Center from './components/Center'


const App = () => {
  return (
    <div className='w-full text-black'>
  <Navbar/>
  <div className='w-full flex '>
  <Sidebar/>
  <Center/>
  </div>
 
    </div>
  )
}

export default App