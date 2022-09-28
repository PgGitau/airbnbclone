// import logo from './logo.svg';
import Navbar from '../Navbar/Navbar';
// import Hero from '../Hero/Hero';
import Card from '../Card/Card';
import './App.css';
import dataArray from '../Data';

function App() {
  const cardItems = dataArray.map(cardItem => {
    return <Card 
              img={cardItem.coverImg}
              rating= {cardItem.stats.rating}
              reviewCount={cardItem.stats.reviewCount}
              location={cardItem.location}
              title={cardItem.title}
              price={cardItem.price} 
           />
  } ) 

  return (
    <div className="App">
      <Navbar />
      {cardItems}
      {/* <Hero /> */}
    </div>
  );
}

export default App;
