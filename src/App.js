import React, { useState } from "react";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";


function App() {

  const [posts, setPosts] = useState ([
    {id: 1, title: 'test', body: 'description'},
    {id: 2, title: 'test 2', body: 'description'},
    {id: 3, title: 'test 3', body: 'description'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
 
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList posts={posts} title='Post List 1' />
    </div>
  );
}

export default App;
