import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfor from './components/ShowInfor';
import { Product } from './types/product'
function App() {
  const [count, setCount] = useState<number>(0)
  const [info, setinfo] = useState<Product>({
    name:'John',
    age : 20

  });
  
  return (
    <div className="App">
      {count} <button className="btn btn-primary" onClick={()=>setCount(count + 1)}>Click</button>
      <ShowInfor person={info}/>
    </div>
  )
}

export default App;
