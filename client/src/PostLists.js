import axios from "axios";
import { useEffect, useState } from "react"
import CommentCreate from "./CommentCreate";
import CommentLists from "./CommentLists";

export default () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:4000/posts')
      setPosts(res.data);
    }
    fetchPosts();
  }, [])

  const renderedPosts = Object.values(posts).map(post => (
    <div className="card" style={{ width: '30%', marginBottom: '20px' }} key={post.id}>
      <div className="card-body">
        <h3>{post.title}</h3>
        <CommentLists postId={post.id}/>
        
        <CommentCreate postId={post.id} />
      </div>
    </div>
  ))

  return (
    <div className="container mt-5">
      <h3>Post Lists</h3>
      <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderedPosts}
      </div>
    </div>
  )
}