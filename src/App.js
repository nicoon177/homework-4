import React, { Component } from 'react';
import data from './data';

import MoreButton from './components/MoreButton';
import PostList from "./components/PostList";
import Search from './components/Search';

class App extends Component {
    constructor(props) {
        super (props);

        this.state = {
            countPosts: data.length,
            countPostShow: 10,
            btnHidden: false,
            search: '',
            postsShowed: data.slice(0, 10),
            filterPosts: data
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        if(this.state.countPostShow < this.state.countPosts) {
            const postShowed = this.state.filterPosts.slice(0, this.state.countPostShow + 10);
            this.setState({
                countPostShow: postShowed.length,
                postsShowed: postShowed
            })
        } else {
            this.setState({
                btnHidden: true
            })
        }
    };

    handleChange = (e) => {
        e.preventDefault();
        const filterPosts = data.filter((post) => {
                if(post.title.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1)
                    return post;
            }
        );
        const countPostsShow = filterPosts.length > 10 ? 10 : filterPosts.length;
        const postsShow = filterPosts.slice(0, countPostsShow);

        this.setState({
            search: e.target.value,
            postsShowed: postsShow,
            countPosts: filterPosts.length,
            btnHidden: countPostsShow === filterPosts.length,
            countPostsShow,
            filterPosts
        })
    };

    render() {
        return (
            <div>
                <Search value={this.state.search} onChange={this.handleChange} />
                <PostList postShow={this.state.postsShowed} />
                <MoreButton onClick={this.handleClick} hidden={this.state.btnHidden} />
            </div>
        );
    }
}

export default App;
