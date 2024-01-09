import React from "react";
import CustomBtn from "./UI/button/CustomBtn";
import {useNavigate} from 'react-router-dom';

const PostItem = (props) => {
    const router = useNavigate();
    return (
        <div className="post"> 
        <div className="post__content"> 
          <div className="post__content__name">
            {props.post.id}. {props.post.title}
          </div>
          <div className="post__content__text">
          {props.post.body}
          </div>
        </div>
        <div className="post__btns">
            <CustomBtn onClick={() => router(`/posts/${props.post.id}`)}>
              open
            </CustomBtn>
            <CustomBtn onClick={() => props.remove(props.post)}>
              delete
            </CustomBtn>
        </div>
      </div>
    );
}

export default PostItem;