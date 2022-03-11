import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
const person = {
  name: "hoang",
  age: 20,
  status: true,
  products: [
    { id: "1", name: "productA"},
    { id: "2", name: "productB"},
  ]
}
// Sử dụng hàm trong react
const showAge = (age) => <p>Tuoi cua ban la: {age}</p> // 20

// Sử dụng component trong react

const ShowAge = props => <p>Tuoi cua ban la: {props.age}</p> // { age: 20, name: "Dat" }

ReactDOM.render(<div>
  <p>Ten: {person.name} </p>
  <p>Tuoi: {person.age} </p>
  <p>{person.status ? "Da ket hon" : "Chua ket hon"}</p>
  <ul>
    {person.products.map(product => <li>
      {product.name}
      {product.id}

    </li>)}
  </ul>
  <div>function: { showAge(person.age) }</div>
  <div>Component: <ShowAge age={person.age} name="Dat" /></div>
</div>, document.querySelector('#root'));