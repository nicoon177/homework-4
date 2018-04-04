import React from 'react';
import NotPosts from './NotPosts';
import PostListItem from "./PostListItem";

import styled from 'styled-components';

const Loading = styled.h2`
    text-align: center;
`;


const PostList = (props) => {
    if(props.loading) {
        return <Loading>Loading...</Loading>
    }

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