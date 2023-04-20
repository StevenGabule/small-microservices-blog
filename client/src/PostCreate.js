import axios from 'axios';
import { useState } from 'react';

export default () => {
  const [title, setTitle] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();

    await axios.post('http://localhost:4000/posts', {
      title
    })

    setTitle('');
  }

  return <div className="container">
    <form onSubmit={handleSubmit}>
      <h2>Create New Post</h2>
      <div className="form-group">
        <label>Title: </label>
        <input className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  </div>
}