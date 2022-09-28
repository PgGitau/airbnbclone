// import logo from './logo.svg';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Card from '../Card/Card';
import './App.css';
import dataArray from '../Data';

function App() {
  const cardItems = dataArray.map(cardItem => {
    return <Card 
              key={cardItem.id}
              cardItem = {cardItem}
              // There's another way of doing above by using ES6 spread syntax({...cardItem})
           />
  } ) 

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
