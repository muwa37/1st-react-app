import {React, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import PostService from "../API/PostService";
import CustomLoader from "../components/UI/loader/CustomLoader";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id);
    }, []);

    return (
        <div>
            <h1>opened post {params.id}</h1>
            {isLoading
                ? <CustomLoader/>
                : <div>{post.title}</div>
            } 
            <h1>
                comments
            </h1>
            {isComLoading
                ? <CustomLoader/>
                : <div>
                    {comments.map(comm => 
                        <div 
                            style={{marginTop: 15}}
                            key={comm.id}
                        >
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default PostIdPage;