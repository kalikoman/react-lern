import React, { useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Myselect from "./components/Ui/select/Myselect";
import Myinput from "./components/Ui/input/Myinput";

function App() {
    const [js_posts, setJs_posts] = useState([
        { id: 1, title: 'HTML', body: 'base', type:'js_type' },
        { id: 2, title: 'React', body: 'js library', type:'js_type' },
        { id: 3, title: 'CSS', body: 'styles', type:'js_type' }
    ])
    const [search, setSearch] = useState('')
    const [selectedSort, setSelectedSort] = useState('')
    function getSortedPosts() {
        if (selectedSort && search) {
            return [...js_posts].sort((first, second) =>
                first[selectedSort].localeCompare(second[selectedSort])).filter(post =>
            post.title === search || post.body === search);
        }
        if (selectedSort) {
            return [...js_posts].sort((first, second) => first[selectedSort].localeCompare(second[selectedSort]))
        }
        if (search) {
            return [...js_posts].filter(post =>
                post.title === search || post.body === search)
        }
        return js_posts;
    }
    const sortedPosts = getSortedPosts();
    const removePost = (post) => {
        setJs_posts(js_posts.filter(p=> p.id !== post.id))
    }
    const createPost = (newPost) => {
        setJs_posts([...js_posts, newPost])
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
       // setJs_posts()
    }

    const setSearchValue = (searchValue) => {
        setSearch(searchValue.target.value);
    }
    const jss_posts = sortedPosts.filter(post =>
        post.type === 'js_type'
    );
    const php_posts = sortedPosts.filter(post =>
        post.type === 'php_type'
    );;
    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <Myinput
            placeholder="Search..."
            value={search}
            onChange={setSearchValue}
            />
            <Myselect
                value={selectedSort}
                onChange={sortPosts}
            defaultValue={'Select option'}
            options={[{
                name: 'Name',
                value: 'title'
            }, {
                name: 'Descr',
                value: 'body'
            }]}
            />
            {
                jss_posts.length !== 0
                    ? <PostList remove={removePost} posts={ jss_posts } title={ 'Javascript posts' }/>
                    : <h1 style={{textAlign: "center"}}>Have no js posts</h1>
            }
            {
                php_posts.length !== 0
                    ? <PostList remove={removePost} posts={ php_posts } title={ 'Php posts' }/>
                    : <h1 style={{textAlign: "center"}}>Have no php posts</h1>
            }

        </div>
    );
}

export default App;
