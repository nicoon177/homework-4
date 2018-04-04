import React, { Component } from 'react';

import MoreButton from './components/MoreButton';
import PostList from "./components/PostList";
import Search from './components/Search';

const ROOT_URL = 'https://jsonplaceholder.typicode.com';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countPosts: 0,
            countPostShow: 0,
            btnHidden: false,
            search: '',
            postsShowed: [],
            filterPosts: [],
            fetchedData: [],
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            fetch(`${ROOT_URL}/posts`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        filterPosts: data,
                        postsShowed: data.slice(0, 10),
                        countPosts: data.length,
                        loading: false
                    })
                })
        }, 2000);

        setInterval(() => {
            fetch(`${ROOT_URL}/posts`)
                .then(response => response.json())
                .then(
                (posts) => {
                    this.setState({
                        fetchedData: posts
                    });
                }
            );
        }, 3000);
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
        const filterPosts = this.state.fetchedData.filter((post) => {
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
                    <PostList postShow={this.state.postsShowed} loading={this.state.loading} />
                <MoreButton onClick={this.handleClick} hidden={this.state.btnHidden} />
            </div>
        );
    }
}

export default App;
