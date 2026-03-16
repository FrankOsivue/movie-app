import { useState } from 'react';

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div className='card'>
      <h2>{title}</h2>
      <button
        onClick={() => {
          setHasLiked(!hasLiked);
        }}
      >
        {hasLiked ? '♥' : '♡'}
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
