import React from 'react';
import {Link} from 'react-router-dom';

function CardComponent({data}) {
    return (
        <div className='posts-tile'>
            <div className="top">
                <img src="https://picsum.photos/200/150" alt="image"/>
            </div>
            <div className="title"> 
                <span>{data.title}</span> 
            </div>
            <div className="writer">
                <span>{data.userId}</span>
            </div>
            <Link to = {'/posts/${data.id}'}>
                <button> Read More</button>
            </Link> 
        </div>
    );
}

export default CardComponent
