import React, { useState } from 'react';
import './like-dislike.css'

function LikeDislike() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div >
     <div className="like-dislike">
       <div className="like-dislike">
       <div>{likes}</div>
       <span onClick={handleLike}>   
       <img className={'like-dislike-ic'}  src="/like-icon.png" alt="Like icon" />
       </span>
       </div>
       <div className="like-dislike">
       <div>{dislikes}</div>
       <span onClick={handleDislike}>
       <img className={'like-dislike-ic'}  src="/dislike-icon.png" alt="Like icon" />
       </span>     
     </div> 
      </div>
    </div>
  );
}

export default LikeDislike;
