import React from 'react';

const RadioButtons = ({options, title, filter, handleChange}) => {
  return (
    <div className='radio-input-row'>
      <div className='radio-input-title'> {title} </div>
      <div className='radio-buttons'>
        {options.map((option) => {
          return (
            <label key={option} className='radio-button'>
              {option} <input type='radio' value={option} name={filter} onChange={handleChange.bind(this, filter)} />
            </label>
          )
        })}
      </div>

    </div>
  )
}

export default RadioButtons;