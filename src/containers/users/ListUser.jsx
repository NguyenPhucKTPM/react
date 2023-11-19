import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import UserService from '../../services/UserService'
import AddUser from './AddUser'

export default function ListUser() {
    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        getListUser()
    }, [])
    const getListUser = async () => {
        let res = await UserService.getAllUser();
        if (res && res.data) {
            setListUser(res.data);
        }
    }
    // console.log(listUser)

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    }
    return (
        <>
            <div className='my-3 d-flex justify-content-between'>
                <span>Danh sách người dùng:</span>
                <button className='btn btn-primary' onClick={() => setShowModal(true)}>Thêm người dùng</button>
            </div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên tài khoản</th>
                        <th>Họ tên</th>
                        {/* <th>Địa chỉ</th> */}
                        <th>Giới tính</th>
                        <th>Email</th>
                        <th>Quyền</th>
                        <th className='text-center'>Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <tr key={`id-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{item.userName}</td>
                                    <td>{item.fullName}</td>
                                    {/* <td>{item.address}</td> */}
                                    <td>{item.sex}</td>
                                    <td>{item.email}</td>
                                    <th>{item.role}</th>
                                    <th className='d-flex justify-content-center'>
                                        <button className='btn btn-warning mx-2'>
                                            <Link className='text-black' to={`/update-user/${item.userName}`}>Cập nhật</Link>
                                        </button>
                                        <button className='btn btn-danger'>
                                            <Link className='text-white' to={`/delete-user/${item.userName} `}>Xóa</Link>
                                        </button>
                                    </th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <AddUser
                showModal={showModal}
                handleClose={handleClose}
                reloadListUser ={getListUser}
            />
            
        </>
    )
}
