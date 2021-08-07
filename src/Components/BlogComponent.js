import React, { useState } from 'react';

function BlogComponent() {
    const[title, setTitle] = useState('');
    const[writer, setWriter] = useState('');
    const[content, setContent] = useState('');
    console.log('title');

    const addPost = (e) => {
        e.preventDefault();
        const newPost = {title, writer, content};
        console.log(newPost);
    }
    return (
        <div className="add-post">
            <h2> Add New Blog </h2>
            <form onSubmit={addPost}>
				<label>Add Title</label>
				<input type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}/>
				<label>Name of Writer</label>
				<input type="text"
                value={writer} 
                onChange={(e) => setWriter(e.target.value)}/>
				<label>Add Content</label>
				<textarea type="text"
                value={content} 
                onChange={(e) => setContent(e.target.value)}/>

				<button>Publish</button>
            </form>
            
        </div>
    )
}

export default BlogComponent
