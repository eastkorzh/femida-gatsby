import React from 'react';

import './styles.scss';

const Textarea = (props) => {
  const { label, rows, name, className, handleChange, value } = props;
  
  return (
    <div className={`form__textarea ${className || ''}`}>
      <textarea onChange={(e) => handleChange(e)} value={value} rows={rows || 3} name={name} required/>
      <label>{label}</label>
    </div>
  )
}

export default Textarea;
