import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './StarRate.css'
export default function StarRate() {
    const[rating, setRating]=useState(null);
    const[hover, setHover]=useState(null);
    
  return (
    <>
    {[...Array(5)].map((star,i) =>{
        const ratingValue=i+1;
        return(
            <>
            <label>
                <input type='radio' name='rating' value={ratingValue} onClick={()=>setRating(ratingValue)}/>
                <FaStar 
                className='star' 
                size={28} 
                color={ratingValue <=(hover || rating) ? "#33ab9f":"#c3d6d0"}
                onMouseEnter={()=> setHover(ratingValue)}
                onMouseLeave={()=> setHover(null)}/>
            </label>
            </>
    )
    })}
    </>
  )
}
