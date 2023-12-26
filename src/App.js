import React, { useState } from "react";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import PostList from "./components/PostList";
import "./styles/App.css";
import CustomBtn from "./components/UI/button/CustomBtn";
import CustomInput from "./components/UI/input/CustomInput";


function App() {

  const [posts, setPosts] = useState ([
    {id: 1, title: 'test', body: 'description'},
    {id: 2, title: 'test 2', body: 'description'},
    {id: 3, title: 'test 3', body: 'description'},
  ])
 
  return (
    <div className="App">
      <form>
        <CustomInput type='text' placeholder="post name" />
        <CustomInput type='text' placeholder="post body" />
        <CustomBtn> create </CustomBtn>
      </form>
      <PostList posts={posts} title='Post List 1' />
    </div>
  );
}

export default App;
