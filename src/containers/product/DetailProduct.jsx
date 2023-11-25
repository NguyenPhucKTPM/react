import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductService from '../../services/ProductService'
import { format } from 'date-fns';


export default function DetailProduct() {
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
            <div className='container p-0 mt-5'>
                <h1>Mã sản phẩm: {detailProduct?.idSanPham}</h1>
                <h1>Tên sản phẩm: {detailProduct?.tenSanPham}</h1>
                <h1>Thuộc danh mục: {detailProduct?.tenDanhMuc}</h1>
                <h1>Ngày thêm: {detailProduct?.ngayTao && format(new Date(detailProduct?.ngayTao), "yyyy-MM-dd HH:mm:ss")}</h1>
                <h1>Ngày sửa: {detailProduct?.ngaySuaSanPham && format(new Date(detailProduct?.ngaySuaSanPham), "yyyy-MM-dd HH:mm:ss")}</h1>
                <h1>Giá: {detailProduct?.gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} </h1>
                <h1>Khuyến mãi: {detailProduct?.khuyenMai}%</h1>
                <h1>Hình ảnh:</h1>
                <img src={`/imageProduct/${detailProduct?.hinhAnh}`} width={100} alt="" />
                <p>Mô tả: {detailProduct?.moTa}%</p>

            </div>

        </>
    )
}
