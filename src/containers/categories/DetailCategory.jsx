import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CategoryService from '../../services/CategoryService';
import { format } from 'date-fns';


export default function DetailProduct() {
    let { idDanhMuc } = useParams();
    const [detailCategory, setDetailCategory] = useState(null);
    useEffect(() => {
        const getDetailCategory = async () => {
            const res = await CategoryService.detailCategory(idDanhMuc)
            console.log(res.data)
            if (res && res.data) {
                setDetailCategory(res.data)
            }
        }
        getDetailCategory()
    }, [idDanhMuc])
    return (
        <>
            <div className='container p-0 mt-5'>
                <h1>Mã danh mục: {detailCategory?.idDanhMuc}</h1>
                <h1>Tên danh mục: {detailCategory?.tenDanhMuc}</h1>
                <h1>Ngày thêm: {detailCategory?.ngayThem && format(new Date(detailCategory?.ngayThem), "yyyy-MM-dd HH:mm:ss")}</h1>
                <h1>Ngày sửa: {detailCategory?.ngaySua && format(new Date(detailCategory?.ngaySua), "yyyy-MM-dd HH:mm:ss")}</h1>

            </div>

        </>
    )
}
