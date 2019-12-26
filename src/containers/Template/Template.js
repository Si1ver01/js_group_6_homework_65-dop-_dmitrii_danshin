import React, { useEffect, Fragment } from "react";
import "./Template.scss";
import { useState } from "react";
import { axiosMain } from "../../axios/axiosMain";
import Loader from "react-loader-spinner";


const Template = props => {
  const initialState={
    loading : true,
    title : '',
    message : '',
  }
  const [state, dispatch] = useState(initialState);

  useEffect(()=>{
    const getPage = async () => {
      dispatch({...state,loading:true})
      const response = await axiosMain(`${props.match.params.id}.json`);
      dispatch({...response.data,loading:false});
    }
    getPage();
    //eslint-disable-next-line
  },[props.match.params.id])



  return (
    <div className="Template">
      {state.loading ?         <div className="loader">
          <Loader
            type="BallTriangle"
            color="#ffffff"
            height={100}
            width={100}
          />
        </div> : <Fragment>
        <h1>{state.title}</h1>
      <p>{state.message}</p>
        </Fragment>}
    </div>
  );
};

export default Template;
