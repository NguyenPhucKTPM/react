import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import CategoryService from '../../services/CategoryService';
import AddCategory from './AddCategory';
import DeleteCategory from './DeleteCategory';

export default function ListCategory() {
    const [listCategory, setlistCategory] = useState([]);

    useEffect(() => {
        getListCategory()
    }, [])
    const getListCategory = async () => {
        let res = await CategoryService.getAllCategory();
        if (res && res.data) {
            setlistCategory(res.data);
            // console.log(res.data)
        }
    }
    
    const [showModalAdd, setShowModalAdd] = useState(false);
    const [showModalDel, setShowModalDel] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleClose = () => {
        setShowModalAdd(false);
        setShowModalDel(false);
    }
    const handleDeleteCategory = (category) => {
        setSelectedCategory(category);
        setShowModalDel(true);
        console.log('dc chon',category)
    }
    return (
        <>
            <div className='my-3 d-flex justify-content-between'>
                <span>Danh sách danh mục:</span>
                <button className='btn btn-primary'
                    onClick={() => setShowModalAdd(true)}
                    >Thêm danh mục
                </button>
            </div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Tên Danh Mục</th>
                        <th className='text-center'>Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {listCategory && listCategory.length > 0 &&
                        listCategory.map((item, index) => {
                            return (
                                <tr key={`id-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{item.idDanhMuc}</td>
                                    <td>{item.tenDanhMuc}</td>
                                    <th className='d-flex justify-content-center'>
                                    <button className='btn btn-success'>
                                            <Link className='text-white' to={`/detail-category/${item.idDanhMuc}`}>Xem</Link>
                                        </button>
                                        <button className='btn btn-warning mx-2'>
                                            <Link className='text-black' to={`/update-category/${item.idDanhMuc}`}>Cập nhật</Link>
                                        </button>
                                        <button className='btn btn-danger' onClick={() => handleDeleteCategory(item)}>Xóa</button>
                                    </th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <AddCategory 
                showModal={showModalAdd}
                handleClose={handleClose}
                reloadListCategory={getListCategory}
            />
            <DeleteCategory
                showModal={showModalDel}
                handleClose={handleClose}
                reloadListCategory={getListCategory}
                category={selectedCategory}
            />
        </>
    )
}
