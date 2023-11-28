import React, { useState } from 'react'
import UserService from '../../services/UserService'
import { toast } from 'react-toastify';

export default function Register() {
    const [error, setError] = useState('');
    const [input, setInput] = useState({
        userName: '',
        password: '',
        rePassword: '',
        fullName: '',
        sex: '',
        email: '',
        address: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput((prevProps) => ({
            ...prevProps,
            [name]: value
        }))
    }
    //ngan chan su kien submiet tai lai trang
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(input)
        try {
            await UserService.signup(
                input.userName,
                input.password,
                input.rePassword,
                input.fullName,
                input.address,
                input.sex,
                input.email,
            );
            toast.success(`Đăng ký người dùng thành công: ${input.userName}`)
            setInput({});
        } catch (error) {
            console.error('Lỗi từ server:', error.response.data.message);
            setError(error.response.data.message)
        }
    }
    return (
        <>
            <div className='container  d-flex align-items-center justify-content-center'>
                <div className='addNew w-50 mt-3'>
                    <h2>Đăng ký tài khoản</h2>
                    <div class="mb-3 mt-3">
                        <label htmlFor="userName" class="form-label">Tên người dùng:</label>
                        <input type="text"
                            id="userName"
                            name="userName"
                            class="form-control"
                            placeholder="Nhập tài khoản"
                            value={input.userName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div class="mb-3 mt-3">
                        <label htmlFor="password" class="form-label">Mật khẩu:</label>
                        <input type="password"
                            id="password"
                            name="password"
                            class="form-control"
                            placeholder="Nhập mật khẩu"
                            value={input.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div class="mb-3 mt-3">
                        <label htmlFor="rePassword" class="form-label">Xác nhận mật khẩu:</label>
                        <input type="password"
                            id="rePassword"
                            name="rePassword"
                            class="form-control"
                            placeholder="Xác nhận mật khẩu"
                            value={input.rePassword}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div class="mb-3 mt-3">
                        <label htmlFor="fullName" class="form-label">Họ tên:</label>
                        <input type="text"
                            id="fullName"
                            name="fullName"
                            class="form-control"
                            placeholder="Nhập họ tên"
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
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" class="form-label">Địa chỉ email:</label>
                        <input type="email"
                            id="email"
                            name="email"
                            class="form-control"
                            placeholder="Nhập email: 'example@gmail.com'"
                            value={input.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3 mt-3">
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
                    <div className="mb-3 mt-3 text-end">
                        <button className='btn btn-primary ' onClick={handleSubmit}>Đăng kí</button>
                    </div>
                    <div className='mb-3 text-center'><span className='text-danger'>{error}</span></div>
                </div>
            </div>
        </>
    )
}
