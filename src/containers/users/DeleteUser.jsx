import React from 'react'
import { toast } from 'react-toastify'

import { Modal, Button } from 'react-bootstrap'
import UserService from '../../services/UserService';

export default function DeleteUser(
    {
        showModal,
        handleClose,
        user,
        reloadListUser
    }
) {
    const handleDelete = async () => {
        try {
            if (user) {
                await UserService.deleteUser(user.userName);
                // Thực hiện xóa thành công, ví dụ: reload danh sách người dùng
                handleClose();
                toast.warning(`Xóa người dùng thành công: ${user.userName}`)
                reloadListUser();
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }
    return (
        <>
            <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xóa người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='confirm'>Bạn có chắc muốn xóa người dùng: '{user?.userName}' ?</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleDelete} >
                        Xóa
                    </Button>
                </Modal.Footer>

            </Modal>


        </>
    )
}
