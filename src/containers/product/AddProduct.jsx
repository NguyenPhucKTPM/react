import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import ProductService from '../../services/ProductService';
import ChooseCategory from './ChooseCategory';
import { toast } from 'react-toastify'

export default function AddProduct(
    {
        showModal,
        handleClose,
        reloadListProduct,
    }

) {
    const [error, setError] = useState('');
    const [input, setInput] = useState({
        tenSanPham: '',
        idDanhMuc: '',
        gia: '',
        khuyenMai: '',
        hinhAnh: '',
        noiBat: '',
        moTa: '',
    })
  

    const handleInputChange = (e) => {
        const { name, files, value } = e.target;
        // CAT BO C:\\fakepath\\ cho file hinh
        if (name === 'hinhAnh' && files.length > 0) {
            const filePath = value;
            const fileName = filePath.replace("C:\\fakepath\\", "");

            setInput((prevProps) => ({
                ...prevProps,
                [name]: fileName,
            }));
        } else {
            setInput((prevProps) => ({
                ...prevProps,
                [name]: value,
            }));
        }

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await ProductService.insertProduct(
                input.tenSanPham,
                input.idDanhMuc,
                input.gia,
                input.khuyenMai,
                input.hinhAnh,
                input.noiBat,
                input.moTa,
            );
            handleClose();
            toast.success(`Thêm sản phẩm thành công: ${input.tenSanPham}`)
            reloadListProduct();
            setInput({});
        } catch (error) {
            console.error('Lỗi từ server:', error.response.data.message);
            setError(error.response.data.message)
        }
        console.log(input);
    }
    return (
        <>
            <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='addProduct'>
                        <div className='mt-3 mb-3'>
                            <label htmlFor="tenSanPham" className='form-label'>Tên sản phẩm:</label>
                            <input
                                type="text"
                                id='tenSanPham'
                                name='tenSanPham'
                                className='form-control'
                                placeholder='Nhập tên sản phẩm'
                                value={input.tenSanPham}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div class="mt-3 mb-3">
                            <label htmlFor="idDanhMuc" className='form-label'>Chọn danh mục:</label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                name="idDanhMuc"
                                defaultValue=""
                                onChange={handleInputChange}
                            >
                                <option value="" disabled>
                                    Chọn danh mục
                                </option>
                                <ChooseCategory />

                            </select>
                        </div>
                        <div className='mt-3 mb-3'>
                            <label htmlFor="gia" className='form-label'>Giá:</label>
                            <input
                                type="text"
                                id='gia'
                                name='gia'
                                className='form-control'
                                placeholder='Nhập giá sản phẩm'
                                value={input.gia}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='mt-3 mb-3'>
                            <label htmlFor="khuyenMai" className='form-label'>Khuyến mãi:</label>
                            <input
                                type="text"
                                id='khuyenMai'
                                name='khuyenMai'
                                className='form-control'
                                placeholder='Nhập khyến mãi'
                                value={input.khuyenMai}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='mt-3 mb-3'>
                            <label htmlFor="hinhAnh" className='form-label'>Hình ảnh:</label>
                            <input
                                type="file"
                                id='hinhAnh'
                                name='hinhAnh'
                                className='form-control'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='mt-3 mb-3'>
                            <label htmlFor="noiBat" className='form-label'>Chọn nổi bật:</label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                name="noiBat"
                                id='noiBat'
                                value={input.noiBat}
                                onChange={handleInputChange}
                            >
                                <option value="" disabled> Chọn nổi bật</option>
                                <option value="1">Nổi bật</option>
                                <option value="0">Không nổi bật</option>
                            </select>
                        </div>
                        <div className='mt-3 mb-3'>
                            <label htmlFor="moTa" className='form-label'>Mô tả:</label>
                            <textarea
                                type="text"
                                id='moTa'
                                name='moTa'
                                className='form-control'
                                placeholder='Nhập mô tả'
                                value={input.moTa}
                                onChange={handleInputChange}
                            />
                        </div>

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
