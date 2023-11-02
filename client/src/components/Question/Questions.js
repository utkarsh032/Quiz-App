import React, { useState } from 'react'


export default function Questions() {

  const [checked, setChecked] = useState(undefined)

  function onselect() {
    console.log('radio button')
  }

  return (
    <div className='questions'>
      <h2 className='text-light'>Question 1</h2>

      <ul>
        <li>
          <input type='radio' value={false} name='options' id='q1-option' onChange={onselect()} />
          <label className='text-primary htmlFor="q1-option'>Options</label>
          <div className='check checked'></div>
        </li>
      </ul>
    </div>
  )
}
