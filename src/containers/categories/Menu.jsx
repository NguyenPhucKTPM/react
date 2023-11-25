import React, { useEffect, useState } from 'react'
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CategoryService from '../../services/CategoryService';

export default function Menu() {
    const [listCategory, setListCategory] = useState([])
    useEffect(() => {
        getListCategory()
    }, [])
    const getListCategory = async () => {
        let res = await CategoryService.getAllCategory();
        if (res && res.data) {
            setListCategory(res.data);
        }
    }
    return (
        <>
            <NavDropdown title="Menu" id="navbarScrollingDropdown">
                {listCategory &&
                    listCategory.map((item, index) => (
                        <NavDropdown.Item>
                            <Link className='text-white' key={`id-${index}`} to={`/category-product/${item.idDanhMuc}`}>{item.tenDanhMuc}</Link>
                        </NavDropdown.Item>
                    ))
                }
            </NavDropdown>
        </>
    )
}
