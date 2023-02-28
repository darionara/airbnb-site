import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data/data'

function App() {
  
  const cardItems = data.map(cardItem => {
    return <Card key={cardItem.id}
                 img={cardItem.coverImg}
                 alt={cardItem.alt}
                 rating={cardItem.stats.rating}
                 reviewCount={cardItem.stats.reviewCount} 
                 location={cardItem.location}
                 title={cardItem.title}
                 price={cardItem.price}
                />
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
