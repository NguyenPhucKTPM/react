import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserService from '../../services/UserService';
import { toast } from 'react-toastify';

export default function ChangeInfo() {
    const [input, setInput] = useState({
        fullName: '',
        address: '',
        sex: '',
        email: '',
    })
    const [detailUser, setDetailUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const getDetailUser = async () => {
            try {
                const res = await UserService.getMyInfo();
                if (res && res.data) {
                    setDetailUser(res.data.detailUser);
                }
            } catch (error) {
                navigate('/');
            }
        }
        getDetailUser()
    }, [])
    useEffect(() => {
        setInput((prevInput) => ({
            ...prevInput,
            fullName: detailUser?.fullName || '',
            sex: detailUser?.sex || '',
            email: detailUser?.email || '',
            address: detailUser?.address || '',
            // userName: detailUser?.userName || '',

        }));
    }, [detailUser]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput((prevProps) => ({
            ...prevProps,
            [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(input)
        try {
            await UserService.updateMyInfo(
                input.fullName,
                input.address,
                input.sex,
                input.email,
            );
            toast.success(`Cập nhật người dùng thành công: ${detailUser?.userName}`)
        } catch (error) {
            console.log(input)
            console.error('Lỗi từ server:', error.response.data.message);
        }
       
    }
    return (
        <>
            <div className='container w-50'>
                <h2 className='my-4'>Cập nhật người dùng: {detailUser?.userName}</h2>
                <div class="mb-3 mt-3">
                    <label htmlFor="fullName" class="form-label">Họ tên:</label>
                    <input type="text"
                        id="fullName"
                        name="fullName"
                        class="form-control"
                        placeholder="Nhập tài khoản"
                        value={input.fullName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='mt-3 mb-3'>
                    <div class="form-check">
                        <input type="radio"
                            class="form-check-input"
                            name="sex"
                            id="nam"
                            value="Nam"
                            checked={input.sex === 'Nam'}
                            onChange={handleInputChange}
                        />
                        <label class="form-check-label" htmlFor="nam">
                            Nam
                        </label>
                    </div>
                    <div class="form-check">
                        <input type="radio"
                            class="form-check-input"
                            name="sex"
                            id="nu"
                            value="Nữ"
                            checked={input.sex === 'Nữ'}
                            onChange={handleInputChange}
                        />
                        <label class="form-check-label" htmlFor="nu">
                            Nữ
                        </label>
                    </div>
                </div>
                <div class="mb-3 mt-3">
                    <label htmlFor="email" class="form-label">Họ tên:</label>
                    <input type="email"
                        id="email"
                        name="email"
                        class="form-control"
                        placeholder="Nhập email: 'example@gmail.com'"
                        value={input.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="mb-3 mt-3">
                    <label htmlFor="address" class="form-label">Địa chỉ:</label>
                    <textarea type="text"
                        id="address"
                        name="address"
                        class="form-control"
                        rows="3"
                        value={input.address}
                        onChange={handleInputChange}
                    />
                </div>
                <div className=' mt-3 mb-3 d-flex justify-content-end'>
                    <button onClick={handleSubmit} className='btn btn-primary'>Sửa</button>
                </div>
            </div>
        </>
    )
}
