import axios from 'axios';
import React,{useEffect, useState} from 'react';

const UserPosts = (props) => {
    const [posts, setPosts] = useState([])
 
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${localStorage.getItem('id')}`)
            .then((res) =>{
                const data = res.data
                setPosts(data)
            })
            .catch((err) => {
                alert(err.message)
            })
    },[])

    return (
        <div>
            {posts.map ( (post) => {
                return (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default UserPosts;