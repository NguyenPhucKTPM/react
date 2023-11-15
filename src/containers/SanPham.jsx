import React from 'react'
import { useParams } from 'react-router-dom'

export default function SanPham({ sanpham }) {
    let idSanPham = useParams();
    let chiTiet = false;
    if ('idsp' in idSanPham) {
        chiTiet = true;
        sanpham = {
            idSp: idSanPham.idsp,
            src: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/21/638072161262575097_xiaomi-redmi-note-11-pro-4g-dd-bh.jpg',
            tenSanPham: 'Điện thoại Xiaomi Note 11 Pro',
            gia: 5000000,
            chitiet: 'thông số sản phẩm'
        };
    }
    return (
        <>
            <div>
                {chiTiet &&
                    `Chi tiết sản phẩm ${sanpham.idSp}`}
            </div>
            <div>
                <img
                    src={sanpham.src}
                    alt={sanpham.tensp}
                />
            </div>
            <div>{sanpham.tenSanPham}</div>
            <div>Giá:{sanpham.gia}</div>
            <div>
                {chiTiet && sanpham.chitiet}
            </div>
        </>
    )
}
