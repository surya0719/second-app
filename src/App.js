
import './App.css';

function App() {

const data=[
  {
    img:"https://images5.alphacoders.com/606/606284.jpg",
    name:"Fancy product",
    price:"$40.00-$80.00",
  },
  {
    img:"https://images5.alphacoders.com/606/606284.jpg",
    name:"special product",
    price:"$40.00-$80.00",
  },
  {
    img:"https://images5.alphacoders.com/606/606284.jpg",
    name:"sample product",
    price:"$40.00-$80.00",
  },
  {
    img:"https://images5.alphacoders.com/606/606284.jpg",
    name:"special item",
    price:"$40.00-$80.00",
  },
  {
    img:"https://images5.alphacoders.com/606/606284.jpg",
    name:"sample product",
    price:"$40.00-$80.00",
  },
  {
    img:"https://images5.alphacoders.com/606/606284.jpg",
    name:"populat item",
    price:"$40.00-$80.00",
  },
   {
    img:"https://images5.alphacoders.com/606/606284.jpg",
    name:"Fancy product",
    price:"$40.00-$80.00",
  },
   {
    img:"https://images5.alphacoders.com/606/606284.jpg",
    name:"Fancy product",
    price:"$40.00-$80.00",
  }
]
  return (
    <div className="App">
     {data.map((item,idx)=>(
      <Samplecard
      key={idx}
      img={item.img}
      name={item.name}
      price={item.price}
      />
     ))}
    </div>
  );
}

export default App;

function Samplecard(props){
  return(
  
      
      <div className='main-div'>
      <img className='image' src={props.img} alt="one piece"/>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <button type="submit" className='add'>add</button>
      <button type="submit" className='remove'>remove</button>
   
    </div>
  )
}
