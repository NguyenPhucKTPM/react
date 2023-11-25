import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import UserService from '../../services/UserService'
import { format } from 'date-fns';


export default function DetailProduct() {
    let { userName } = useParams();
    const [detailUser, setDetailUser] = useState(null);
    useEffect(() => {
        const getDetailUser = async () => {
            const res = await UserService.detailUser(userName)
            console.log(res.data)
            if (res && res.data) {
                setDetailUser(res.data)
            }
        }
        getDetailUser()
    }, [userName])
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
