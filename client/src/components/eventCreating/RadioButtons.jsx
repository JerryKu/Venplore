import React from 'react';

const RadioButtons = ({options, title, filter, handleChange}) => {
  return (
    <div className='radio-buttons'>
      {title}
      {options.map((option) => {
        return (
          <label key={option} className='radio-button'>
            {option} <input type='radio' value={option} name={filter} onChange={handleChange.bind(this, filter)}/>
          </label>
        )
      })}
    </div>
  )
}

export default RadioButtons;