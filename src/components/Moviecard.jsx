import React from 'react';

const Moviecard = ({ movie }) => {
  return (
    <div>
      <p
        key={movie.id}
        className='text-white'
      >
        {movie.title}
      </p>
    </div>
  );
};

export default Moviecard;
