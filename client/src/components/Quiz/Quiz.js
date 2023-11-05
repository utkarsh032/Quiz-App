import React, { useEffect } from 'react'
import Questions from '../Question/Questions'

import { useSelector } from 'react-redux'

export default function Quiz() {

  const state = useSelector(state => state)


  useEffect(() => {
    console.log(state)
  })

  function onPrev() {
    console.log('Prev')
  }

  function onNext() {
    console.log('Next')
  }


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
