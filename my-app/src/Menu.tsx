import React from "react";
import './MainView.css'
import { useState } from "react";

export const Menu = () => {
  let [selected, setSelected] = useState('')

  return (
    <>
        <div style={{position:'relative', width:'100vw', height:'100vh', backgroundColor: '#f8f4dc'}}>
        
          <div style = {{position:'absolute', width:'100%', display:'flex', gap:'0px', alignItems:'center', }}>
   
        <span className="menu-entry" style = {{padding:'10px', ...(selected == 'PROJECTS' ? selectedStyle : {})}} onClick={() => setSelected('PROJECTS')}>PROJECTS</span>
        <span className="menu-entry" style={{padding:'10px',...(selected == 'BIO' ? selectedStyle : {})}} onClick={() => setSelected('BIO')}> BIO</span>
        <span className="menu-entry" style={{padding:'10px',...(selected == 'TEST' ? selectedStyle : {})}} onClick={() => setSelected('TEST')}> TEST</span>
        <span className="menu-entry" style={{padding:'10px',...(selected == 'NEWS' ? selectedStyle : {})}} onClick={() => setSelected('NEWS')}> NEWS</span>
        <span className="menu-entry" style={{padding:'10px',...(selected == 'BLOG' ? selectedStyle : {})}} onClick={() => setSelected('BLOG')}> BLOG</span>
        <span className="menu-entry" style={{padding:'10px',...(selected == 'TEST AGAIN' ? selectedStyle : {})}} onClick={() => setSelected('TEST AGAIN')}> TEST AGAIN</span>
        <span className="menu-entry" style={{padding:'10px',...(selected == 'HIRE ME' ? selectedStyle : {})}} onClick={() => setSelected('HIRE ME')}> HIRE ME</span>
        </div>
      </div>


      
      
    </>
  );
};

const selectedStyle = {
  backgroundColor: 'black',
  color: 'white'
}