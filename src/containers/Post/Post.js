import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/BlogComponents/Ui/Button/Button";
import "./Post.scss";
import { Link } from "react-router-dom";
import { FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";
import { axiosMain } from "../../axios/axiosMain";
import { MainContext } from "../../context/MainContext/mainContext";
import { BLOG_LIST } from "../../context/types";

const Post = props => {
  const [state,dispatch] = useState({})
  const {removeMessage} = useContext(MainContext);

  useEffect(() => {
    const test = async () => {
     const response = await axiosMain(`blog/${props.match.params.id}.json`);
     dispatch(response.data);
    }
    test();
    // eslint-disable-next-line
  }, []);


  const newDate = new Date(state.date).toLocaleDateString('ru')

  return (
    <div className="Post">
      <div className="container">
        {Object.keys(state).length && <div className="singlePost">
          <div className="postTop">
            <h1>{state.title}</h1>
            <span>Date :{newDate}</span>
          </div>
          <div className="postBody">
            <p>{state.message}</p>
          </div>
          <div className="postFooter">
            <Button handler={() => removeMessage(`blog`,props.match.params.id,BLOG_LIST,props)}>
              {<FaRegTrashAlt />}
            </Button>
            <Link to={"/post/edit/" + props.match.params.id}>
              {<FaPencilAlt />}
            </Link>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default Post;
