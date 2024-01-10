import React, {useEffect, useState} from "react";

import PostForm from "../components/PostForm"
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
import CustomModal from "../components/UI/modal/CustomModal";
import CustomBtn from "../components/UI/button/CustomBtn";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import CustomLoader from "../components/UI/loader/CustomLoader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from '../utils/pages'
import Pagination from "../components/UI/pagination/CustomPagination";


function Posts() {

  const [posts, setPosts] = useState ([])
  
  const [filter, setFilter] = useState({sort: '', query: ''})
  
  const [modal, setModal] = useState(false);

  const [totalPages, setTotalPages] = useState(0);

  const [limit, setLimit] = useState(10);

  const [page, setPage] = useState(1);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching( async(limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, []);
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page)
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

      {postError &&
        <h1>eroor ${postError}</h1>
      }

      {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}> <CustomLoader/> </div>
        :
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title='post list 1' />
      }
      <Pagination 
        page={page} 
        changePage={changePage} 
        totalPages={totalPages}
      />
      
      
    </div>
  );
}

export default Posts;
