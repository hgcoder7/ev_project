import React from 'react'
import './Gallery1.css'
export default function Gallery1() {
  return (
    <div className='gallery'>
      <h1 className="heading">Choose Your Vehicle</h1>
        
      <div className="box1">
        <img src='cycleimg.png' className='img1' />
        <h1 className="box1_heading">EV-B-1</h1>
        <div className="shadow_box1"></div>
      </div>
    
      <div className="box2">
        <img src="cycleimg1.png" className='img2'/>
        <h1 className="box2_heading">EV-B-2</h1>
        <div className="shadow_box2"></div>
      </div>
     
      <div className="box3">
        <img src="cycleimg2.png" className='img3'/>
        <h1 className="box3_heading">EV-B-3</h1>
        <div className="shadow_box3"></div>
      </div>
     
  
      <div className="box4">
        <img src="cycleimg3.png" className='img4'/>
        <h1 className="box4_heading">EV-B-4</h1>
        <div className="shadow_box4"></div>
      </div>
      
     
    </div>
  )
}
