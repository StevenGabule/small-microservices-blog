import axios from "axios"
import { useEffect, useState } from "react"

export default ({postId}) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
      setComments(res.data);
    }
    fetchData();
  }, [])

  const renderedComments = comments.map(comment => (
    <li key={comment.id}>{comment.content}</li>
  ))
  

  return (
    <ul>{renderedComments}</ul>
  )
}