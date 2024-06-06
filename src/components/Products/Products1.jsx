import React, { useState } from 'react'

import { SlArrowLeft, SlArrowRight  } from "react-icons/sl";
import './Products1.css'

export default function products1() {
    const imgs=[
        {value:'cycleimg.png'},
        {value:'cycleimg1.png'},
        {value:'cycleimg2.png'},
        {value:'cycleimg3.png'},
]
    const [wordData,setWordData]=useState(imgs[0])
    const [val, setVal]=useState(0);
    
    const handleNext=()=>{
    console.log("next")
    let index=val<imgs.length-1 ? val+1:val;
    setVal(index);
    const wordSlider=imgs[index];
    setWordData(wordSlider)
    }

    const handlePrev=()=>{
    console.log("prev")
    let index=val<=imgs.length-1 && val>0? val-1:val;
    setVal(index);
    const wordSlider=imgs[index];
    setWordData(wordSlider)
    }
    return (
        
        <div className='p1'>
        <div className="content">
            <span className='small_content'>
            LET'S RIDE THE </span><br/>
            <span className='future'>FUTURE</span>
            <br />
                SIMPLE AND CUSTOMER FRIENDLY DESIGN
                <br />
                <br />
                LETS INNOVATE THE WORLD TOGETHER
        </div>
        <button className='pre_order' >PRE-ORDER</button>
        <div className="features">
           <div className="f1">45km/hr <br />
           <span className='speed'>Speed</span></div>
           <div className="f2">90km <br />
           <span className='battery_usage'>Battery usage</span></div>
           <div className="f3">2.5hr <br />
           <span className='time'>Charging Time</span></div>
        </div>
        <img src={wordData.value} className='img'/>
        <div className="shadow1"></div>
      <div className="halfcircle">
       EV-B
      </div>
      <div className="buttons">
        <button className='previous' onClick={handlePrev} ><SlArrowLeft /><span className='pre'>PREV</span> </button>
        <button className='next' onClick={handleNext}><span className='nex'>NEXT</span><SlArrowRight /></button>
      </div>
    </div>
  )
}
