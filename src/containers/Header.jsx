import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from './context';
import Information from './Information';
import Button from './Button';
import DanhMucNB from './DanhMucNB';

export default function Header() {
    const { items, setItems } = useContext(Context);
    const user = {
        userName: 'Phuc',
        age: '22',
    };
    const isLogin = false;

    return (
        <>
            {/* {items ? items  : 'Chưa có dữ liệu'}             */}
            <ul>
                <li><Link to={` `}>Tất cả danh mục</Link></li>
                <li><DanhMucNB /></li>
                <li><Link to={`/themsanpham`}>Thêm sản phẩm</Link></li>
                {isLogin ? (
                    <>
                        <Information user={user} />
                        <li><Button user={user} /></li>
                    </>
                ) : (
                    <li><Link to={`/dangnhap`}>Đăng nhập</Link></li>
                )}


            </ul>
        </>
    )
}
