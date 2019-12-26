import React from 'react'
import './PostsList.scss'
import ListItem from './ListItem/ListItem'
import { useContext } from 'react'
import { MainContext } from '../../../context/MainContext/mainContext'

const PostsList = () => {
  const {blogList} = useContext(MainContext);
  console.log(blogList)


  let arrayPosts = Object.keys(blogList).map(elem => ({...blogList[elem]}))
  return (
    <ul className='PostsList'>
      {arrayPosts.map(post => <ListItem title={post.title} date={post.date} key={post.id} id={post.id}/>)}
    </ul>
  )
}

export default PostsList
