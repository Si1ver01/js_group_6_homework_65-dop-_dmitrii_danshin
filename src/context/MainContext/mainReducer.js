import { GET_TODO, SEND_FILMS, BLOG_LIST, LOADING_CHANGE} from "../types";

const handlers = {
  [GET_TODO] : (state, {payload}) => ({...state,[GET_TODO]:payload,loading:false}),
  [SEND_FILMS] : (state,{payload}) => ({...state,[SEND_FILMS] : payload,loading:false}),
  [BLOG_LIST] : (state,{payload}) => ({...state,[BLOG_LIST] : payload,loading:false}),
  [LOADING_CHANGE] : state => ({...state,loading : true}),
  DEFAULT : state => state
}

export const mainReducer = (state,action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state,action);
}