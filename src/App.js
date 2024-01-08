import React, {useMemo, useState } from "react";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import CustomModal from "./components/UI/modal/CustomModal";
import CustomBtn from "./components/UI/button/CustomBtn";
import { usePosts } from "./hooks/usePosts";


function App() {

  const [posts, setPosts] = useState ([])
  
  const [filter, setFilter] = useState({sort: '', query: ''})
  
  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">

      <CustomBtn style={{marginTop: 30}} onClick={() => setModal(true)}>
        create post
      </CustomBtn>

      <CustomModal visible={modal} setVIsible={setModal}>
        <PostForm create={createPost}/>
      </CustomModal>

      <hr style={{margin: '15px' }} />

      <PostFilter filter={filter} setFilter={setFilter}/>

      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Post List 1' />
    </div>
  );
}

export default App;
