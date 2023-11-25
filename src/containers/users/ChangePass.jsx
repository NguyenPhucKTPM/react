import React, { useState } from 'react'
import UserService from '../../services/UserService';
import { toast } from 'react-toastify';

export default function ChangePass() {
    const [error, setError] = useState('');
    const [input, setInput] = useState({
        curPass: '',
        password: '',
        rePassword: '',
    })
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
            await UserService.changePass(
                input.curPass,
                input.password,
                input.rePassword,
            );
            toast.success(`Cập nhật mật khẩu người dùng thành công:`)
        } catch (error) {
            console.log(input)
            console.error('Lỗi từ server:', error.response.data.message);
            setError(error.response.data.message)
        }
    }

    return (
        <>
            <div className='container w-50'>
                <h2 className='my-4'>Cập nhật mật khẩu người dùng</h2>
                <div class="mb-3 mt-3">
                    <label htmlFor="curPass" class="form-label">Mật khẩu hiện tại:</label>
                    <input type="password"
                        id="curPass"
                        name="curPass"
                        class="form-control"
                        value={input.curPass}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="mb-3 mt-3">
                    <label htmlFor="password" class="form-label">Mật khẩu mới:</label>
                    <input type="password"
                        id="password"
                        name="password"
                        class="form-control"
                        value={input.password}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="mb-3 mt-3">
                    <label htmlFor="rePassword" class="form-label">Nhập lại mật khẩu mới:</label>
                    <input type="password"
                        id="rePassword"
                        name="rePassword"
                        class="form-control"
                        value={input.rePassword}
                        onChange={handleInputChange}
                    />
                </div>
                <div className=' mt-3 mb-3 d-flex justify-content-end'>
                    <button onClick={handleSubmit} className='btn btn-primary'>Cập nhật</button>
                </div>
                <span className='text-center text-danger mb-2'>{error}</span>
            </div>
        </>
    )
}
