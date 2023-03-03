import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data/data';

function App() {
  
  const cardItems = data.map(cardItem => {
    return <Card key={cardItem.id}
      {...cardItem}
    />;
  });
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cardItems}
      </section>
    </div>
  );
}

export default App;
