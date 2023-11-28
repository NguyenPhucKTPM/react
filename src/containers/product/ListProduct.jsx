import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import ProductService from '../../services/ProductService';
import AddProduct from './AddProduct';
import DeleteProduct from './DeleteProduct'


export default function ListProduct() {
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        getListProduct();

    }, [])
    const getListProduct = async () => {
       try {
        let res = await ProductService.getAllProduct();
        if (res && res.data) {
            setListProduct(res.data);
            // console.log(res.data)
        }
       } catch (error) {
        console.log('errror product list',error)
       }
    }

    const [showModalAdd, setShowModalAdd] = useState(false);
    const [showModalDel, setShowModalDel] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleClose = () => {
        setShowModalAdd(false);
        setShowModalDel(false);
    }
    const handleDeleteProduct = (product) => {
        setSelectedProduct(product);
        setShowModalDel(true);
        console.log(product)
    }
    return (
        <>
            <div className='my-3 d-flex justify-content-between'>
                <span>Danh sách sản phẩm:</span>
                <button className='btn btn-primary'
                    onClick={() => setShowModalAdd(true)}
                >Thêm sản phẩm
                </button>
            </div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Tên Danh Mục</th>
                        <th>Tên sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Giá</th>
                        <th>Khuyến mãi</th>
                        <th className='text-center'>Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {listProduct && listProduct.length > 0 &&
                        listProduct.map((item, index) => {
                            return (
                                <tr key={`id-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{item.idSanPham}</td>
                                    <td>{item.tenDanhMuc}</td>
                                    <td>{item.tenSanPham}</td>
                                    <td><img src={`/imageProduct/${item.hinhAnh}`} width={80} alt="" /></td>
                                    <td>{item.gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                    <td>{item.khuyenMai}%</td>
                                    <td className='text-center'>
                                        <button className='btn btn-success'>
                                            <Link className='text-white' to={`/detail-product/${item.idSanPham}`}>Xem</Link>
                                        </button>
                                        <button className='btn btn-warning mx-2'>
                                            <Link className='text-black' to={`/update-product/${item.idSanPham}`}>Cập nhật</Link>
                                        </button>
                                        <button className='btn btn-danger' onClick={() => handleDeleteProduct(item)}>Xóa</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <AddProduct
                showModal={showModalAdd}
                handleClose={handleClose}
                reloadListProduct={getListProduct}
            />
            <DeleteProduct
                showModal={showModalDel}
                handleClose={handleClose}
                product={selectedProduct}
                reloadListProduct={getListProduct}
            />
        </>
    )
}
