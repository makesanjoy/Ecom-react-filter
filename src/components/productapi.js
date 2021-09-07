import React, { useState, useEffect } from 'react'
import {Product } from "./pages/product"
import {Button } from 'react-bootstrap';

export const ProductAPI = () => {
    
        const [datas, setDatas] = useState([]);
      

    const getDatas = async () => {
       
            const response = await fetch('https://fakestoreapi.com/products');
      
            setDatas(await response.json());
       
    }

    useEffect(() => {
        getDatas();
    }, []);

   


    

    return (
        <>
       
       
            <Product datas={datas}/>
        </>
    )

 
}
