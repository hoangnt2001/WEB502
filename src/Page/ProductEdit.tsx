import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { read } from '../API/products';

type Props = {}
type FormInputs = {
    name: string,
    price: number,
    desc: string,
}

const ProductEdit = (props: Props) => {
    const { register, handleSubmit, formState: {errors}, reset} = useForm<FormInputs>();
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data);
        }
        getProduct();
    },[]);

    const onSubmit: SubmitHandler<FormInputs> = data => {
        console.log(data);
    }
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name', { required: true})} />
        {errors.name && <span>Bắt buộc phải nhập trường này!</span>}
        <input type="number" {...register('price')} />
        {errors.price && <span>Bắt buộc phải nhập trường này!</span>}

        <input type="text" {...register('desc')} />
        {errors.desc && <span>Bắt buộc phải nhập trường này!</span>}


        <button>Update</button>
    </form>
  )
}

export default ProductEdit