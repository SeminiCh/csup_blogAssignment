import React from 'react';
import CardComponent from './CardComponent';
import UseFetchComponent from './UseFetchComponent';

function HomeComponent() {
    const {data: posts} = UseFetchComponent(
        'https://jsonplaceholder.typicode.com/posts'
    );
    console.log(posts);
    return (
        <div className="posts-list">
            <div className="posts-container"> 
                {posts ? (
                    posts.map((posts) => 
                        <CardComponent data={posts} key = {posts.id}/>)
                ):
                (
                    <p>Loading </p>
                )}
            </div>
        </div>
    );
}

export default HomeComponent;
