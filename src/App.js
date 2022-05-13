import logo from './logo.svg';
import './App.css';
import Button  from './button';
import Card from './card';
import { useState } from 'react';

function App() {
  
  const [arr,setArray] = useState([
   
    {
      id: "1",
      title: "Car 1",
      price: 1000000,
      quantity: 1,
      size : "9000kg",
      description: "This is bugati",
      image: require('./img/c1.png'),
    },
    {
      id: "2",
      title: "Car 2",
      price: 1000000,
      quantity: 2,
      size : "1000kg",
      description: "This is ferari",
      image: require('./img/c2.png'),
    },
    {

      id: "3",
      title: "Car 2",
      price: 500000,
      quantity: 5,
      size : "6000kg",
      description: "This is mustang",
      image: require('./img/c3.png'),
    },
    {
      id: "4",
      title: "Car 4",
      price: 800000,
      quantity: 1,  
      size : "7000kg",    
      description: "This is honda",
      image: require('./img/c4.png'),
    },
  ])

  let addToCart = (getValue) =>{
   alert(`
    Title : ${getValue.title} 
    Price : ${getValue.price} 
    Quantity: ${getValue.quantity} 
    Size: ${getValue.size} 
    Description :  ${getValue.description} 
    `)
  } 

  return (
    <div className="App">
      <header className="App-header">
      <div className="container">
  <div className="row">  

    {arr.map((getValue) => (<Card title={getValue.title} price={getValue.price}  quantity={getValue.quantity}  size={getValue.size} shortDesc={getValue.shortDesc} description={getValue.description} action={() => addToCart(getValue)} src={getValue.image} />))}
    </div> </div> 
      </header>
    </div>
  );
}

export default App;
