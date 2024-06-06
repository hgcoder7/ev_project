import React from 'react'
import './Homescreen.css'
import StarRate from '../StarRate'

const Homescreen = () => {
  return (
    <div className="homescreen">
    <div className='firsthalf'>
      <div className='title'>
            Take the <br />streets.<span className='evb'>EV-B</span>
      </div>
      
      <div className='description'>
        <span className='smalldesc'>Shift your ride, not gears. </span>  
        <br />Ease your path toward the fastest way to move in the city.
        <br />Free your mind as the bike adapts intuitively to power 
        <br />the speed you need.
      </div>
      <img src='cycleimg1.png' className='cyclepic'/>
      <div className="circlee"></div>
      <button className='book'>Book a test ride</button>
      </div>
    <div className='secondhalf'>
       <div className='rating' ><StarRate/> <br />1000+ Reviews</div>
        <img src='cycleimg1.png' className='reversecyclepic'  />
        <div className="circle"></div>
    </div>
   
    </div>
  )
}

export default Homescreen
