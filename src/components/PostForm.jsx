import React, { useState } from "react";
import CustomBtn from "./UI/button/CustomBtn";
import CustomInput from "./UI/input/CustomInput";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault()
        
        const newPost = {
            ...post,
            id: Date.now()
        }

        create(newPost)
        setPost({title: '', body: ''})
    
      }

    return (
        <form>
            <CustomInput 
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type='text' 
                placeholder="post name" 
            />
            <CustomInput 
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type='text' 
                placeholder="post body" 
            />
            <CustomBtn onClick={addNewPost}> create </CustomBtn>
        </form>
    );
};

export default PostForm;