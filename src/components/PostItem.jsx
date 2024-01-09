import React from "react";
import CustomBtn from "./UI/button/CustomBtn";

const PostItem = (props) => {
    return (
        <div className="post"> 
        <div className="post__content"> 
          <div className="post__content__name">
            {props.post.id} {props.post.title}
          </div>
          <div className="post__content__text">
          {props.post.body}
          </div>
        </div>
        <div className="post__btns">
            <CustomBtn onClick={() => props.remove(props.post)}>
              delete
            </CustomBtn>
        </div>
      </div>
    );
}

export default PostItem;