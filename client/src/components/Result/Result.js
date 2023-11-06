import React from 'react'
import './Result.css'
import { Link } from 'react-router-dom'
import ResultTable from '../ResultTable.js/ResultTable'
import { useDispatch } from 'react-redux'

import { resetAllAction } from '../../redux/question_reducer'
import { resetResultAction } from '../../redux/result_reducer'

export default function Result() {

  const dispatch = useDispatch()

  function onRestart() {
    dispatch(resetAllAction())
    dispatch(resetResultAction())
  }

  return (
    <div className='container'>
      <h1 className='text text-light'>Result</h1>

      <div className='result flex-center'>

        <div className='flex'>
          <span>Username</span>
          <span className='bold'>Name</span>
        </div>


        <div className='flex'>
          <span>Total Quiz Points:</span>
          <span className='bold'>50</span>
        </div>


        <div className='flex'>
          <span>Total Questions:</span>
          <span className='bold'>05</span>
        </div>


        <div className='flex'>
          <span>Total Attempts:</span>
          <span className='bold'>03</span>
        </div>


        <div className='flex'>
          <span>Total Earn Points:</span>
          <span className='bold'>30</span>
        </div>


        <div className='flex'>
          <span>Quiz Result:</span>
          <span className='bold'>Passed</span>
        </div>


      </div>

      <div className='start'><Link className='btn' to={'/'} onClick={onRestart}>Retake</Link></div>

      <div className='container'>
        <ResultTable></ResultTable>
      </div>
    </div>
  )
}