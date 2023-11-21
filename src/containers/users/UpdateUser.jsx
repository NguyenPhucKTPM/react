import React, { useEffect, useState } from 'react'
import UserService from '../../services/UserService'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
export default function UpdateUser() {
    //lay chi tiet nguoi dung
    let { userName } = useParams();
    const [detailUser, setDetailUser] = useState(null);
    useEffect(() => {
        const getDetailUser = async () => {
            const res = await UserService.detailUser(userName)
            console.log(res.data)
            if (res && res.data) {
                setDetailUser(res.data)
                // console.log(res.data)
            }
        }
        getDetailUser()
    }, [userName])
    // cap nhat nguoi dung
    const [input, setInput] = useState({
        userName: '',
        password: '',
        fullName: '',
        sex: '',
        email: '',
        address: '',
        groupID: '',
    })
    useEffect(() => {
        // Đảm bảo rằng giá trị của input.fullName chỉ được cập nhật khi detailUser thay đổi
        setInput((prevInput) => ({
            ...prevInput,
            fullName: detailUser?.fullName || '',
            password: detailUser?.password || '',
            sex: detailUser?.sex || '',
            email: detailUser?.email || '',
            address: detailUser?.address || '',
            groupID: detailUser?.groupID || '',
            userName: detailUser?.userName || '',

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
        try {
            await UserService.updateUser(
                input.userName,
                input.password,
                input.fullName,
                input.address,
                input.sex,
                input.email,
                input.groupID
            );
            toast.success(`Cập nhật người dùng thành công: ${input.userName}`)
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
                <label htmlFor="gruopID">Chọn quyền:</label>
                <div class="mt-3 mb-3">
                    <select class="form-select" id='gruopID' aria-label="gruopID" name="groupID" value={input.groupId} onChange={handleInputChange}>
                        <option selected value={input.groupID}>{detailUser?.role}</option>
                        <option value="1">Admin</option>
                        <option value="2">User</option>
                    </select>
                </div>
                <input type="hidden"
                    name="userName"
                    class="form-control"
                    value={input.userName}
                    onChange={handleInputChange}
                />
                <div className=' mt-3 mb-3 d-flex justify-content-end'>
                    <button onClick={handleSubmit} className='btn btn-primary'>Sửa</button>
                </div>
            </div>
        </>
    )
}
