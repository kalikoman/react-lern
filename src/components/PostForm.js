import React, { useState } from 'react';
import Myinput from "./Ui/input/Myinput";
import Mybutton from "./Ui/button/Mybutton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({ title: '', body: '' });

    const AddNewPost = (event) => {
        event.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        };
        create(newPost)
        setPost({ title: '', body: '' });
    }
    return (
        <form>
            <Myinput value={post.title}
                     onChange={e => setPost({...post, title: e.target.value})}
                     type='text' placeholder='Name of post'/>
            <Myinput value={post.body}
                     onChange={e => setPost({...post, body: e.target.value})}
                     type='text' placeholder='Description of post'/>
            <Mybutton onClick={AddNewPost}>Add post</Mybutton>
        </form>
    );
};

export default PostForm;
