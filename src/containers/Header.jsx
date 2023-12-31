import React, { useContext } from 'react'
// import { Link } from 'react-router-dom';

import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Menu from './categories/Menu';
// import { Context } from './context';
// import Information from './Information';
// // import Button from './Button';
// import DanhMucNB from './DanhMucNB';
import { AppContext } from '../context/AppProvider';

export default function Header(props) {
    const { logoutContext } = useContext(AppContext)
    const { currentUser } = useContext(AppContext)
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container className='p-0'>
                    <Navbar.Brand href="/">SmartPhoneStore</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Trang chủ</Nav.Link>
                            <Menu />
                            {currentUser.isAuthenticated ? (
                                <>
                                    {currentUser.role === 'admin' && (
                                        <NavDropdown title="Quản li web" id="navbarScrollingDropdown">
                                            <NavDropdown.Item href="/list-user">Danh sách người dùng</NavDropdown.Item>
                                            <NavDropdown.Item href="/list-category">Danh sách danh mục</NavDropdown.Item>
                                            <NavDropdown.Item href="/list-product">Danh sách sản phẩm</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                        </NavDropdown>
                                    )}
                                    <NavDropdown title={currentUser?.username} id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="/my-infomation">Xem chi tiết</NavDropdown.Item>
                                        <NavDropdown.Item href="/update-my-infomation">Cập nhật thông tin</NavDropdown.Item>
                                        <NavDropdown.Item href="/change-password">Cập nhật mật khẩu</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                    </NavDropdown>
                                    <Nav.Link href="#action1" disabled>Quyền: {currentUser?.role}</Nav.Link>
                                    <Nav.Link onClick={logoutContext}>Logout</Nav.Link>
                                </>
                            ) : (
                                <>
                                    <Nav.Link href="/login">Đăng nhập</Nav.Link>
                                    <Nav.Link href="/register">Đăng ký</Nav.Link>
                                </>
                            )}
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-warning">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
