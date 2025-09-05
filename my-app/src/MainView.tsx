import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './MainView.css'
import {Menu} from './Menu.tsx'

function App() {
 

  return (
    <>
   <style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
</style>
      <div style={{display: 'flex', flexDirection: 'column', width: 'fit-content'}}>
        <Menu></Menu>
      </div>
        
    
    </>
  )
}

export default App
