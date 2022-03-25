import React from 'react'
import { ProductType } from '../types/product';
type showInforProps = {
    person: ProductType;
}
const ShowInfor = (props:showInforProps) => {
    return (

        <div>
            <p className="fw-bold fs-6">showInforName: {props.person.name}</p>
            <p className="fst-italic">showInforPrice: {props.person.price}</p>
        </div>
        
        
    )
}

export default ShowInfor;