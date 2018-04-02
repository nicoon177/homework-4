import React from 'react';

const PostListItem = (props) => {
    const { title, body} = props.show;
    return (
        <div className="list-item">
            <h3 className="list-h3">{title}</h3>
            <p className="list-body">{body}</p>
        </div>
    );
};

export default PostListItem;
