import React from 'react'
import { MainContext } from './mainContext'
import { useReducer } from 'react'
import { mainReducer} from './mainReducer.js'
import { axiosMain } from '../../axios/axiosMain.js'
import { SEND_FILMS, GET_TODO, BLOG_LIST, LOADING_CHANGE } from '../types'

const MainState = ({children}) => {
  const initialState = {
    [GET_TODO] : [],
    [SEND_FILMS] : [],
    [BLOG_LIST] : [],
    loading : false
  }

  const [state,dispatch] = useReducer(mainReducer,initialState);
  const {GET_TODO : taskList,SEND_FILMS : filmsList, BLOG_LIST :blogList,loading} = state;

  const sendMessage = async (url,message,actionType,event,props) => {
    if (event){
      event.preventDefault();
    }
    changeLoading();
    const response = await axiosMain.post(url + '.json',message);
    const formatResponse = {id : response.data.name,...message};
    const fordispatch = [...state[actionType]];
    fordispatch.push(formatResponse)
    dispatch({
      type : actionType,
      payload : fordispatch
    })
    changeLoading();
    if (props){
      props.history.push('/blog');
    }
  }

  const getMessages = async (url,actionType) => {
    changeLoading();
    const response = await axiosMain.get(url + '.json');
    const formatResponse = Object.keys(response.data).map(elem => ({...response.data[elem],id: elem}))
    dispatch({
      type : actionType,
      payload :  formatResponse
    })
  }

const removeMessage = async (url,id,actionType,props) => {
  changeLoading();
  await axiosMain.delete(url + '/' + id + '.json');
  const taskList = [...state[actionType]];
  const formatList = taskList.filter(el => el.id !== id)
  dispatch({
    type : actionType,
    payload : formatList
  })
  if (props){
    props.history.push('/blog');
  }
}

const editMessage = async (url,id,message,actionType,event,props) => {
  if (event){
    event.preventDefault();
  }
  changeLoading();
  const response = await axiosMain.patch(url + '/' + id + '.json',message);
  console.log(response)
  const taskList = [...state[actionType]];
  const index = taskList.findIndex(el => el.id === id);
  taskList[index] = message;
  dispatch({
    type : actionType,
    payload : taskList
  })
  if (props){
    props.history.push('/blog');
  }
}

const changeLoading = () => {
  dispatch({ type : LOADING_CHANGE });
}


  return (
    <MainContext.Provider value={{
      sendMessage, getMessages, removeMessage,editMessage,
      taskList,filmsList,blogList,loading
    }}>
      {children}
    </MainContext.Provider>
    
  )
}

export default MainState
