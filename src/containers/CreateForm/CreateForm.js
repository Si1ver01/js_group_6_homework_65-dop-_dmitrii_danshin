import React from 'react'
import Form from '../../components/BlogComponents/Form/Form'
import './CreateForm.scss'

const CreatePost = (props) => {
  return (
    <div className='CreatePost'>
      <div className='container'>
        <h1>Create post</h1>
        <Form {...props}/>
      </div>
    </div>
  )
}

export default CreatePost
