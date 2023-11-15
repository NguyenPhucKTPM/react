import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import SanPham from './SanPham';

export default function DSSanPhamNB() {
    let idDanhMuc = useParams();
    let dsSPNB = [
        {
            idSp: 'sp1',
            src: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/21/638072161262575097_xiaomi-redmi-note-11-pro-4g-dd-bh.jpg',
            tenSanPham: 'Điện thoại Xiaomi Note 11 Pro 1',
            gia: 5000000,
        },
        {
            idSp: 'sp2',
            src: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/21/638072161262575097_xiaomi-redmi-note-11-pro-4g-dd-bh.jpg',
            tenSanPham: 'Điện thoại Xiaomi Note 11 Pro 2',
            gia: 5000000,
        },
        {
            idSp: 'sp3',
            src: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/21/638072161262575097_xiaomi-redmi-note-11-pro-4g-dd-bh.jpg',
            tenSanPham: 'Điện thoại Xiaomi Note 11 Pro 3',
            gia: 5000000,
        },
    ]
    let tatCaDM = true;
    if ('iddm' in idDanhMuc) {
        tatCaDM = false;
    }
    return (
        <>
            {tatCaDM ? 'Sản phẩm theo danh mục nổi bật' : `Sản phẩm theo danh mục ${idDanhMuc.iddm}`}

            < div style={{ display: 'flex', }}>
                {dsSPNB.map((sp) => (
                    <Link to={`/sanpham/chitiet/${sp.idSp}`}><SanPham sanpham={sp} /></Link>
                ))}
            </div >
        </>
    )
}
