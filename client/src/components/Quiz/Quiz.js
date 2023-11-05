import React, { useEffect } from 'react'
import Questions from '../Question/Questions'

import { useDispatch, useSelector } from 'react-redux'

import { MoveNextQuestion } from '../../hooks/FetchQuestion'
import { MovePrevQuestion } from '../../hooks/FetchQuestion'

export default function Quiz() {

  // const trace = useSelector(state => state.questions.trace);
  const { queue, trace } = useSelector(state => state.questions);
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(trace)
  })

  /** next button event handler */
  function onNext() {
    console.log('On next click')

    if (trace < queue.length) {
      /** increase the trace value by one using MoveNextAction */
      dispatch(MoveNextQuestion());
    }

  }

  /** Prev button event handler */
  function onPrev() {
    console.log('On onPrev click')
    if (trace > 0) {
      /** decrease the trace value by one using MovePrevQuestion */
      dispatch(MovePrevQuestion());
    }
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      {/* display questions */}
      <Questions />

      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}