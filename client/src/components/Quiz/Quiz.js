import React from 'react'
import Questions from '../Question/Questions'

function onPrev() {
  console.log('Prev')
}

function onNext() {
  console.log('Next')
}

export default function Quiz() {
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz App</h1>

      <Questions />
      
      <div className='grid'>
        <button className='btn prev' onClick={onPrev} >Prev</button>
        <button className='btn next' onClick={onNext} > Next</button>
      </div>
    </div >
  )
}
