import React from 'react'
import "./Explore.css"

const Explore = () => {
  return (
    <>
    <div className='explore'>
      <div className='explore-content'>
      <button className='active explore-btn'>Outstation</button>
      <button className='explore-btn unactive'>Local</button>
      <button className='explore-btn unactive'>Airport</button>
      </div>
      <div className='explore-content'>
      <button className='active explore-btn'>One Way</button>
      <button className='explore-btn unactive'>Round Trip</button>
      </div>
      <div className='explore-content-div'>
        <div>
        <h3 style={{margin:0}}>From</h3>
        <input type="text" placeholder='Start typing City' />
        </div>
        <div>
        <h3 style={{margin:0}}>To</h3>
        <input type="text" placeholder='Start typing City'/>
        </div>
        <div>
        <h3 style={{margin:0}}>Pick Up Date</h3>
        <input type="date" placeholder='Start typing Date'/>
        </div>
        <div>
        <h3 style={{margin:0}}>Pick Up At</h3>
        <input type="time" placeholder='Start typing Time'/>
        </div>
      </div>
      <div className='explore-content'>
      <button className='active explore-btn'>Explore Cabs</button>
      </div>
    </div>
    </>
  )
}

export default Explore