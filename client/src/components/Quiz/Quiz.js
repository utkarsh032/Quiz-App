import React from 'react'

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

      <div className='grid'>
        <button className='btn prev' onClick={onPrev} >Prev</button>
        <button className='btn next' onClick={onNext} > Next</button>
      </div>
    </div >
  )
}
