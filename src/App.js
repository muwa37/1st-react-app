import React, { useState } from "react";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import CustomSelect from "./components/UI/select/CustomSelect";
import CustomInput from "./components/UI/input/CustomInput";


function App() {

  const [posts, setPosts] = useState ([
    {id: 1, title: 'test', body: 'description'},
    {id: 2, title: 'test 2', body: 'description'},
    {id: 3, title: 'test 3', body: 'description'},
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const [searchQuery, setSearchQuery] = useState('')

  function getSoretedPosts() {
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }

  const sortedPosts = getSoretedPosts();

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }
 
  return (
    <div className="App">
      <PostForm create={createPost}/>

      <hr style={{margin: '15px' }} />

      <div>

        <CustomInput type='text' 
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='search'
        />

        <CustomSelect 
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='sort'
          options={[
            {value: 'title', name: 'by titile'},
            {value: 'body', name: 'by description'},
          ]}
        />
      </div>

      {posts.length 
        ? 
        <PostList remove={removePost} posts={sortedPosts} title='Post List 1' />
        : 
        <h1 style={{textAlign: 'center'}}>
            no posts
        </h1>
      }
    </div>
  );
}

export default App;
