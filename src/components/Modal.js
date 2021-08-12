import React, { useEffect } from 'react';
import './Modal.css';

function Modal({
  setTrigger,
  userName,
  posts,
}) {

  useEffect(() => {}, [posts])

  // console.warn(posts);

  return (
    <div className='modal' onClick={()=> setTrigger(false)}>
      <div className="modal-inner" onClick={(e)=> e.stopPropagation()}>
        <h3>{userName}`s posts</h3>
        {posts && posts.map((post) =>
          <div className='post' key={post.id}>
            <div className="post-title">{post.title}</div>
            <div className="post-body">{post.body}</div>
          </div>
        )}
        <button className="close-btn" onClick={()=> setTrigger(false)}>Close</button>
       
      </div>
    </div>
  );
}

export default Modal
