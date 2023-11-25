import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProductService from '../../services/ProductService';

export default function ViewDetailProduct() {
    let { idSanPham } = useParams();
    const [detailProduct, setDetailProduct] = useState(null);
    useEffect(() => {
        const getDetailProduct = async () => {
            const res = await ProductService.detailProduct(idSanPham)
            console.log(res.data)
            if (res && res.data) {
                setDetailProduct(res.data)
            }
        }
        getDetailProduct()
    }, [idSanPham])
    return (
        <>
            <div className='row mt-3'>
                <div className="col-lg-6 mb-5 ftco-animate fadeInUp ftco-animated">
                    <img
                        src={`/imageProduct/${detailProduct?.hinhAnh}`}
                        class="img-fluid"
                    />
                </div>
                <div className="col-lg-6 product-details pl-md-5 ftco-animate fadeInUp ftco-animated">
                    <h3>{detailProduct?.tenSanPham}</h3>
                    <p className="price"><span>Mã sản phẩm: {detailProduct?.idSanPham}</span></p>
                    <p className="price"><span>Tình trạng: Mới</span></p>
                    <p className="price"><span>Giá {(detailProduct?.gia - (detailProduct?.gia * (detailProduct?.khuyenMai / 100))).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} </span></p>

                </div>
            </div>
        </>
    )
}
