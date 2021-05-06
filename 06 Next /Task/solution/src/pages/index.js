import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import StylesHome from '../../styles/Home.module.css';

function Home() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await Axios.get('https://jsonplaceholder.typicode.com/posts');

    console.log('Blog posts: ', response);

    setPosts(response);
  };

  return (
    <div className={StylesHome.home}>
      {posts && posts.data.map((post, index) => (
        <div
          className={StylesHome.post}

          key={index}
        >
          <h1>{post.title}</h1>

          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;