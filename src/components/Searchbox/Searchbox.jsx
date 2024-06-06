import React from 'react'
import './Searchbox.css'
import { CiSearch } from "react-icons/ci";
export default function searchbox() {
  return (
    <div>
      <div className="lasthalf">
        <CiSearch className='searching'/>
        <div className="firstlast">THE CONCEPT</div>
        <div className="secondlast">ELECTRIC-B</div>
      </div>
    </div>
  )
}
