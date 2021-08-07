import React from 'react';
import {useHistory, useHistory, useParams} from 'react-router-dom';
import UseFetchComponent from './UseFetchComponent';

function BlogPageComponent() {
    const {id} = useParams();
    const useHistory =useHistory();
    const{data:post} = UseFetchComponent(
        'https://jsonplaceholder.typicode.com/posts' +id
    );
    const deletePost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts' + id,{
            method:'Delete',
        }).then (()=> {
            alert('Delete');
            history.push('/');
        });
    }
    return (
        <div className="content">
            {post &&(
                <>
                    {' '}
                    <img src = "https://picsum.photos/200/150" alt = "header"/>
                    <div className="header-text">
                        <h1> {post.title}</h1>
                        <div className="btn-section">
                            <button className="delete" onClick = {deletePost}>Delete </button>
                        </div>
                    </div>
                    <p>{post.userId}</p>
                    <div className ="text-content">
                        <p> {post.body}</p>
                    </div>
                </>
            )}
            
        </div>
    );

}


export default BlogPageComponent;
