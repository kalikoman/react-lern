import React from 'react';
import Myinput from "./Ui/input/Myinput";
import Mybutton from "./Ui/button/Mybutton";

const PostItem = (props) => {

    return (
        <div className="post">
            <div className="post__content">
                <strong> {props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <Mybutton onClick={() => props.remove(props.post)}>Delete</Mybutton>
            </div>
        </div>

    );
};

export default PostItem;
