import React, { useState } from 'react'
import './Articles.css'

const Articles = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);


    React.useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();

                setPosts(data);
            }
            catch(error) {
                console.log(error)
            }
            setLoading(false);
        }
        fetchData();
    }, []); 

    return (
        <div>
            <h1>
                Articles
            </h1>

            {loading && "Loading.."}

            <div className="wrapper">
                {posts.map(post => (
                    <div key={post.id} className="card">
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                        <a href="">Read now</a>
                    </div>
                ))}
            </div>
            
        </div>
    ) 
}

export default Articles
