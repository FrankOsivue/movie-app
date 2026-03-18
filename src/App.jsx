import React from 'react';
import Search from './components/Search';

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  return (
    <main>
      <div className='pattern' />
      <div className='wrapper'>
        <header>
          <h1>
            <img
              src='./hero.png'
              alt='hero banner'
            />
            Find <span className='text-gradient'>Movies</span> you will enjoy
            without the hassle
          </h1>
        </header>
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <h1 className='text-white'>{searchTerm}</h1>
      </div>
    </main>
  );
};

export default App;
