import React from "react";

const PostItem = (props) => {
    return (
        <div className="post"> 
        <div className="post__content"> 
          <div className="post__content__name">
            {props.number} {props.post.title}
          </div>
          <div className="post__content__text">
          {props.post.body}
          </div>
        </div>
        <div className="post__btns">
            <button>delete</button>
        </div>
      </div>
    );
}

export default PostItem;