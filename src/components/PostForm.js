import React, { useState } from 'react';
import Myinput from "./Ui/input/Myinput";
import Mybutton from "./Ui/button/Mybutton";
import Myselect from "./Ui/select/Myselect";

const PostForm = ({create}) => {
    const [post, setPost] = useState({ title: '', body: '',type: ''});

    const AddNewPost = (event) => {
        event.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        };
        create(newPost)
        setPost({ title: '', body: '', type: '' });
    }

    const changeTitle = (event) => {
        setPost({...post, title: event.target.value})
    }

    const changeBody = (event) => {
        setPost({...post, body: event.target.value})
    }

    const changeType = (type) => {
        setPost({...post, type: type})
    }

    let btn_add_disabled = !post.title || !post.body || !post.type
    return (
        <form>
            <Myinput value={post.title}
                     onChange={changeTitle}
                     type='text' placeholder='Name of post'/>
            <Myinput value={post.body}
                     onChange={changeBody}
                     type='text' placeholder='Description of post'/>
            <Myselect
                value={post.type}
                onChange={changeType}
                defaultValue={'Select type'}
                options={[{
                    name: 'Java script',
                    value: 'js_type'
                }, {
                    name: 'Php',
                    value: 'php_type'
                }]}
            />
            <Mybutton disabled={btn_add_disabled} onClick={AddNewPost}>Add post</Mybutton>
        </form>
    );
};

export default PostForm;
