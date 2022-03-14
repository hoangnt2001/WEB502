import React from 'react'
import { Product } from '../types/product';
type showInforProps = {
    person: Product;
}
const ShowInfor = (props:showInforProps) => {
    console.log(props);
    return (

        <div>
            <p className="fw-bold fs-6">showInforName: {props.person.name}</p>
            <p className="fst-italic">showInforAge: {props.person.age}</p>
        </div>
        
        
    )
}

export default ShowInfor;