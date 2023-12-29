import React, {useMemo, useState } from "react";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import CustomModal from "./components/UI/modal/CustomModal";
import CustomBtn from "./components/UI/button/CustomBtn";


function App() {

  const [posts, setPosts] = useState ([
    {id: 1, title: 'test', body: 'description'},
    {id: 2, title: 'test 2', body: 'description'},
    {id: 3, title: 'test 3', body: 'description'},
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})

  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;

  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts]);

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
