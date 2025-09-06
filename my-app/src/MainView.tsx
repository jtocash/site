import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './MainView.css'
import {Menu} from './Menu.tsx'

function App() {
 

  return (
    <>
   
   <style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
</style>

<div className='app'>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100vw', height:'100vh'}}>
       <Menu></Menu>
      </div>
</div>

        
    
    </>
  )
}

export default App
