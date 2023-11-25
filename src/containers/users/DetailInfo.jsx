import React, { useEffect, useState } from 'react'
import UserService from '../../services/UserService'
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';


export default function DetailInfo() {
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
    
    return (
        <>
            <div className='container p-0 mt-5'>
                <h1>Tên người dùng: {detailUser?.userName}</h1>
                <h1>Họ tên: {detailUser?.fullName}</h1>
                <h1>Giới tính: {detailUser?.sex}</h1>
                <h1>Địa chỉ: {detailUser?.address} </h1>
                <h1> email: {detailUser?.email}%</h1>
                <h1>Quyền: {detailUser?.role}</h1>
            </div>

        </>
    )
}
