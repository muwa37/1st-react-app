import React, {useEffect, useState, useRef} from "react";

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
import { useObserver } from "../hooks/useObserver";
import CustomSelect from "../components/UI/select/CustomSelect";


function Posts() {

  const [posts, setPosts] = useState ([])
  
  const [filter, setFilter] = useState({sort: '', query: ''})
  
  const [modal, setModal] = useState(false);

  const [totalPages, setTotalPages] = useState(0);

  const [limit, setLimit] = useState(10);

  const [page, setPage] = useState(1);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching( async(limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })

  useObserver(lastElement, page < totalPages, isPostsLoading, () => setPage(page + 1))

  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit]);
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page);
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

      <CustomSelect
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue='amount'
        options={[
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: 25, name: '25'},
          {value: -1, name: 'all'}
        ]}
      />

      {postError &&
        <h1>eroor ${postError}</h1>
      }
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='post list 1' />

      {isPostsLoading &&
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}> 
        <CustomLoader/> 
        </div>
      }

      <div 
        ref={lastElement}
        style={{height: 20}}
      />

      <Pagination 
        page={page} 
        changePage={changePage} 
        totalPages={totalPages}
      />
      
      
    </div>
  );
}

export default Posts;
