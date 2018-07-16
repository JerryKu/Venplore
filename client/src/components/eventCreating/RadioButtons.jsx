import React from 'react';

const RadioButtons = ({options, title, filter, handleChange, checked}) => {
  const buttons = options.map((option) => {
    console.log(filter)
    return (
      <div key={option} className='radio-button-container'>
        <input type='radio' value={option} name={filter} id={filter+option} onChange={handleChange.bind(this, filter)} checked={checked==option}/>
        <label htmlFor={filter+option} className='radio-button'>
          {option}
        </label>    
      </div>
    )
  })

  return (
    <div className='radio-input-row'>
      <div className='radio-input-title'> {title} </div>
      <div className='radio-buttons'>
        {buttons}
      </div>
    </div>
  )
}

export default RadioButtons;