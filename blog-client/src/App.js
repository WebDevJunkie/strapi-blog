import React, { useState, useEffect } from 'react'
import axios from 'axios';

export const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      async function fetchData() {
        const res = await axios.get('http://localhost:1337/blogposts');
        setPosts(res.data);
      }
      fetchData();
  }, []);

  return (
    <section>
      { posts.map(post => {
        return (
          <article>
            <div>Title: { post.title }</div>
            <div>Content: { post.content }</div>
          </article>
        );
      }) }
    </section>
  )
}

export default App;
