import React, { useEffect, useState } from 'react'
import UserService from '../../services/UserService'
import { useParams } from 'react-router-dom'

export default function UpdateUser() {
    let { userName } = useParams();
    const [detailUser, setDetailUser] = useState(null);
    useEffect(() => {
        const getDetailUser = async () => {
            const res = await UserService.detailUser(userName)
            if (res && res.data) {
                setDetailUser(res.data)
            }
        }
        getDetailUser()
    }, [userName])
    return (
        <>
            <div className='container w-50'>
            <h2 className='my-4'>Cập nhật người dùng: {detailUser?.userName}</h2>
                <div class="mb-3 mt-3">
                    <label htmlFor="userName" class="form-label">Tên người dùng:</label>
                    <input type="text"
                        id="userName"
                        name="userName"
                        class="form-control"
                        placeholder="Nhập tài khoản"
                        // value={input.userName}
                        // onChange={handleInputChange}
                    />
                </div>
            </div>
            {detailUser?.sex || ''}
            {/* <input type="text" value={detailUser.email} /> */}

        </>
    )
}
