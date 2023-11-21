import React from 'react'
import { toast } from 'react-toastify'
import CategoryService from '../../services/CategoryService'
import { Modal, Button } from 'react-bootstrap'
export default function DeleteCategory(
    {
        showModal,
        handleClose,
        category,
        reloadListCategory,
    }
) {
    const handleDelete = async () => {
        try {
            if (category) {
                await CategoryService.deleteCategory(category.idDanhMuc);
                handleClose();
                toast.warning(`Xóa danh mục thành công: ${category.tenDanhMuc}`)
                reloadListCategory();
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }
  return (
    <>
    <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
            <Modal.Title>Xác nhận xóa danh mục</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='confirm'>Bạn có chắc muốn xóa danh mục: '{category?.tenDanhMuc}' ?</div>
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
