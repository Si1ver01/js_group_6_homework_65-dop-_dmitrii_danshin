import React from 'react'
import classes from './Input.module.css';

const Input = ({label,value,handler,required}) => {
  return (
    <div className={classes.Input}>
      <input type="text" placeholder={label} value={value} onChange={handler} required={required}/>
    </div>
  )
}

export default Input
