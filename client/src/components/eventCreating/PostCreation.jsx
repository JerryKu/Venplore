import React from 'react';
import { Link } from 'react-router-dom';

const PostCreation = () => {
  return (
    <div>
      Congradulations, you have created an adventure for the world to explore!
      <Link to='/' >Go Back Home</Link>
      <Link to='/' >Create Another Adventure!</Link>
    </div>
  )
}

export default PostCreation;
