import React from 'react';
import NotPosts from './NotPosts';
import PostListItem from "./PostListItem";


const PostList = (props) => {
    if(props.postShow.length === 0) {
        return <NotPosts />
    } else {
        return (
            <div>
                {props.postShow.map((item) => <PostListItem key={item.id} show={item} />)}
            </div>
        );
    }
};

export default PostList;