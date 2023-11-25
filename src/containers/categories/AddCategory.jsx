import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import CategoryService from '../../services/CategoryService';
import { toast } from 'react-toastify'

export default function AddCategory(
    {
        showModal,
        handleClose,
        reloadListCategory
    }
) {

    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await CategoryService.insertCategory(input);
            handleClose();
            toast.success(`Thêm danh mục thành công: ${input}`);
            reloadListCategory();
            setInput('')
        } catch (error) {
            console.error('Lỗi từ server:', error.response.data.message);
            setError(error.response.data.message)

        }
    }
    return (
        <>
            <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='addCategory'>
                        <label htmlFor="tenDanhMuc" className='form-label'>Tên danh mục:</label>
                        <input
                            type="text"
                            id='tenDanhMuc'
                            className='form-control'
                            placeholder='Nhập tên danh mục'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleSubmit} >
                        Thêm
                    </Button>
                </Modal.Footer>
                <span className='text-center text-danger mb-2'>{error}</span>

            </Modal>

        </>
    )
}
