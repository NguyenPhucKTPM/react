import React from 'react'
import { toast } from 'react-toastify'
import { Modal, Button } from 'react-bootstrap'
import ProductService from '../../services/ProductService'
export default function DeleteProduct(
    {
        showModal,
        handleClose,
        product,
        reloadListProduct
    }

) {
    const handleDelete = async () => {
        try {
            if (product) {
                await ProductService.deleteProduct(product.idSanPham);
                // Thực hiện xóa thành công, ví dụ: reload danh sách người dùng
                handleClose();
                toast.warning(`Xóa sản phẩm thành công với mã: ${product.idSanPham}`)
                reloadListProduct();
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }
    return (
        <>
            <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xóa sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='confirm'>Bạn có chắc muốn xóa sản phẩm với mã: '{product?.idSanPham}' ?</div>
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
