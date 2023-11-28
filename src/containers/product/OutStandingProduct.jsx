import React, { useEffect, useState } from 'react'
import ProductService from '../../services/ProductService'
import Product from './Product'

export default function OutStandingProduct() {
    const [listProduct, setListProduct] = useState([])
    useEffect(() => {
        const getProduct = async () => {
            let res = await ProductService.getOutStandingProduct();
            if (res && res.data) {
                setListProduct(res.data);
            }
        }
        getProduct()
    }, [])
    return (
        <>
            <h4>Danh sách sản phẩm nổi bật:</h4>
            <div className='row mt-3'>
                {listProduct &&
                    listProduct.map((item, index) => (
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
