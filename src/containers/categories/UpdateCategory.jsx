import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import CategoryService from '../../services/CategoryService';
export default function UpdateCategory() {
    let { idDanhMuc } = useParams();
    const [detailCategory, setDetailCategory] = useState(null);
    const [input,setInput] = useState('');
    useEffect(() => {
        const getDetailCategory = async () => {
            const res = await CategoryService.detailCategory(idDanhMuc)
            console.log(res.data)
            if (res && res.data) {
                setDetailCategory(res.data)
                setInput(res.data.tenDanhMuc)
                // console.log(res.data)
            }
        }
        getDetailCategory()
    }, [idDanhMuc])
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            await CategoryService.updateCategory(input,idDanhMuc);
            toast.success(`Cập nhật người dùng thành công: ${input}`)
        } catch (error) {
            console.log(input)
            console.error('Lỗi từ server:', error.response.data.message);
        }
    } 
    return (
        <>
            <div className='container w-50'>
                <h2 className='my-4'>Cập nhật danh mục: {detailCategory?.tenDanhMuc}</h2>
                <div class="mb-3 mt-3">
                    <label htmlFor="tenDanhMuc" class="form-label">Tên danh mục:</label>
                    <input type="text"
                        id="tenDanhMuc"
                        name="tenDanhMuc"
                        class="form-control"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <div className=' mt-3 mb-3 d-flex justify-content-end'>
                    <button onClick={handleSubmit} className='btn btn-primary'>Sửa</button>
                </div>
            </div>
        </>
    )
}
