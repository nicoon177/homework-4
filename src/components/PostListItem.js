import React, { Component } from 'react';

class PostListItem extends Component{
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        return (
            this.props.show.title !== nextProps.show.title
        );
    }

    render() {
        const { title, body} = this.props.show;
        return (
            <div className="list-item">
                <h3 className="list-h3">{title}</h3>
                <p className="list-body">{body}</p>
            </div>
        );
    }
}

export default PostListItem;
