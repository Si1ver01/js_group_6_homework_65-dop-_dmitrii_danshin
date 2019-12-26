import React from 'react'
import './TextArea.scss'

const TextArea = ({label,rows,handler,value,required}) => {
  return (
    <div className='TextArea'>
          <textarea placeholder={label} rows={rows} onChange={handler} value={value} required={required}/>
    </div>
  )
}

export default TextArea
