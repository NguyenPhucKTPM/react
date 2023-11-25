import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductService from '../../services/ProductService'
import Product from './Product'

export default function ViewProduct() {
    let { idDanhMuc } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        getProduct()
    }, [idDanhMuc])
    const getProduct = async () => {
        let res = await ProductService.getProductByCategory(idDanhMuc)
        if (res && res.data) { setProduct(res.data) }
    }
    return (
        <>
            <div className='row mt-3'>
                {product &&
                    product.map((item, index) => (
                        <Product
                            product={item}
                            index={index}
                            key={index}
                        />
                    ))
                }
            </div>


        </>
    )
}
