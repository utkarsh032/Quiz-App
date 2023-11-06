import React, { useEffect, useState } from 'react'
import Questions from '../Question/Questions'

import { useDispatch, useSelector } from 'react-redux'

import { MoveNextQuestion } from '../../hooks/FetchQuestion'
import { MovePrevQuestion } from '../../hooks/FetchQuestion'
import { PushAnswer } from '../../hooks/setResult'
import { Navigate } from 'react-router-dom'

export default function Quiz() {

  const [check, setChecked] = useState(undefined)

  const result = useSelector(state => state.result.result);
  const { queue, trace } = useSelector(state => state.questions);
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(result)
  })

  /** next button event handler */
  function onNext() {
    console.log('On next click')

    if (trace < queue.length) {
      /** increase the trace value by one using MoveNextAction */
      dispatch(MoveNextQuestion());


      if (result.length <= trace) {
        dispatch(PushAnswer(check))
      }
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

  function onChecked(check) {
    console.log(check)
    setChecked(check)
  }

  // finished exam after last question
  if (result.length && result.length >= queue.length) {
    return <Navigate to={'/result'} replace={true} ></Navigate>
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      {/* display questions */}
      <Questions onChecked={onChecked} />

      <div className='grid'>
        {trace > 0 ? <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>}
        <button className='btn next' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}