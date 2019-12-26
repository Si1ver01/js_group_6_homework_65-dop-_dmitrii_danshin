import React, { useContext, useEffect } from 'react'
import './Blog.scss'
import {MdBookmarkBorder} from 'react-icons/md'
import PostsList from '../../components/BlogComponents/PostsList/PostsList'
import { MainContext } from '../../context/MainContext/mainContext'
import { BLOG_LIST } from '../../context/types'
import Loader from "react-loader-spinner";


const MainPage = () => {
  const {getMessages,blogList,loading} = useContext(MainContext);

  useEffect(() => {
    getMessages('blog',BLOG_LIST)
    // eslint-disable-next-line
  },[])

  return (
    <div className='MainPage'>
      {loading ?        <div className="loader">
          <Loader
            type="BallTriangle"
            color="#ffffff"
            height={100}
            width={100}
          />
        </div>:       <div className='container'>
        <h1>My blog <MdBookmarkBorder/> </h1>
        {blogList && <PostsList/>}
      </div>}
    </div>
  )
}

export default MainPage
