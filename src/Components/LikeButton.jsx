
import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function LikeButton() {
  const [isLiked, setIsLiked] = React.useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button onClick={handleClick} style={{ background: 'transparent', border: 'none' }}>
      {isLiked ? (
        <AiFillHeart size={30} style={{ color: 'red' }} />
      ) : (
        <AiOutlineHeart size={30} style={{ color: 'red' }} />
      )}
    </button>
  );
}
export default LikeButton;