import React from 'react'
import './Sidebar.css'
import { useState } from 'react'
// import Slider from 'react-smooth-range-input'; 

const Sidebar_m = ({ func, funcPrice }) => {

  const [rangeVal, setRangeVal] = useState(0)
  const [fil, setFil] = useState("")


  const setFi = (e) => {
    setFil(e);
    func(e);
  }




  return (
    <>
      <div className="sidebar-cont">
        <div className="sidebar-fil-input">
          <p>{rangeVal}</p>
          <input type="range" className='fir-range' min={0} max={50000} onChange={(e) => (funcPrice(e.target.value) || setRangeVal(e.target.value))} />
        </div>
        <button onClick={() => setFi("")} className='sidebar-btn' style={{ background: (fil === "") ? "teal" : "#fff" }}>All</button>
        <button onClick={() => setFi("black")} className='sidebar-btn' style={{ background: (fil === "black") ? "teal" : "#fff" }}>Black</button>
        <button onClick={() => setFi("red")} className='sidebar-btn' style={{ background: (fil === "red") ? "teal" : "#fff" }}>Red</button>
        <button onClick={() => setFi("blue")} className='sidebar-btn' style={{ background: (fil === "blue") ? "teal" : "#fff" }}>Blue</button>
        <button onClick={() => setFi("yellow")} className='sidebar-btn' style={{ background: (fil === "yellow") ? "teal" : "#fff" }}>Yellow</button>
        <button onClick={() => setFi("white")} className='sidebar-btn' style={{ background: (fil === "white") ? "teal" : "#fff" }}>White</button>
        <button onClick={() => setFi("orange")} className='sidebar-btn' style={{ background: (fil === "orange") ? "teal" : "#fff" }}>Orange</button>
        <button onClick={() => setFi("purple")} className='sidebar-btn' style={{ background: (fil === "purple") ? "teal" : "#fff" }}>Purple</button>
        {/* <button onClick={() => func("men")} className='sidebar-btn'>women</button> */}
      </div>
    </>
  )
}

export default Sidebar_m