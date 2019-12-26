import React from 'react'
import classes from './Button.module.css';

const Button = ({children,handler,type}) => {
  return (
    <button className={classes.Button} onClick={handler} type={type}>
      {children}
    </button>
  )
}

export default Button
