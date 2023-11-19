import React, { useState } from 'react'
import { toast } from 'react-toastify'

import { Modal, Button } from 'react-bootstrap'
import UserService from '../../services/UserService';

export default function AddUser(
    {
        showModal,
        handleClose,
        reloadListUser
    }
) {
    //su dung useState cho nhiều input
    const [input, setInput] = useState({
        userName: '',
        password: '',
        rePassword: '',
        fullName: '',
        sex: '',
        email: '',
        address: '',
        groupId: '',
    });
    //state bao loi
    const [error, setError] = useState('');
    //xu li su kien khi cập nhật trạng thái
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
        try {
            let res = await UserService.insertUser(
                input.userName,
                input.password,
                input.rePassword,
                input.fullName,
                input.address,
                input.sex,
                input.email,
                input.groupId
            );
            handleClose();
            toast.success(`Thêm người dùng thành công: ${input.userName}`)
            reloadListUser();
        } catch (error) {
            console.log(input)
            console.error('Lỗi từ server:', error.response.data.message);
            setError(error.response.data.message)
        }
       
    }
    return (
        <>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='addNew'>
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
                        <div class="mt-3 mb-3">
                            <select class="form-select" aria-label="Default select example" name="groupId" value={input.groupId} onChange={handleInputChange}>
                                <option selected>Chọn quyền</option>
                                <option value="1">Admin</option>
                                <option value="2">User</option>
                            </select>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Thêm
                    </Button>
                </Modal.Footer>
                <span className='text-center text-danger mb-2'>{error}</span>

            </Modal>
        </>
    )
}
