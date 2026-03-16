import { useState, useEffect } from 'react';

const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`You have ${hasLiked ? 'liked' : 'unliked'} ${title}`);
  }, [hasLiked]);
  return (
    <div
      className='card'
      onClick={() => setCount(count + 1)}
    >
      <h2>{title}</h2>
      <button
        onClick={() => {
          setHasLiked(!hasLiked);
        }}
      >
        {hasLiked ? '♥' : '♡'} - {count}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className='card-container'>
      <Card title='The Matrix' />
      <Card title='Inception' />
      <Card title='Interstellar' />
    </div>
  );
};
export default App;
