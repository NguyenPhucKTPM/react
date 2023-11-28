
import React, { useContext, useEffect, useState } from 'react'
import UserService from '../../services/UserService';
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppProvider';

export default function Login() {
    const [userName, setUserName] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState('');
    const { loginContext } = useContext(AppContext)
    const navigate = useNavigate();
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await UserService.Login(userName, password)
            console.log(res)
            loginContext(res.data);
            console.log('tt',res.data)
            if(res.data.role === 'admin'){
               navigate('/list-user');
            }else{ navigate('/')}
            
        } catch (error) {
            console.error('Lỗi từ server:', error.response.data.message);
            setError(error.response.data.message)
        }
    }
    return (
        <>
            <div className='container py-5 h-100'>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: '1 rem', }}>
                            <div className="row g-0">
                                <div class="col-md-6 col-lg-5 d-none d-md-block">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                        alt="login form"
                                        class="img-fluid"
                                        style={{ borderRadius: '1rem 0 0 1rem', }}
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <div className="d-flex align-items-center mb-3 pb-1">
                                            <i
                                                class="fa fa-key fa-2x"
                                                aria-hidden="true"
                                                style={{ color: '#ffc107', }}
                                            ></i>
                                            <span className="h1 fw-bold mb-0">SmartPhoneStore</span>
                                        </div>
                                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px', }}> Đăng nhập</h5>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="text"
                                                id="form2Example17"
                                                className="form-control form-control-lg"
                                                name="userName"
                                                onChange={(e) =>
                                                    setUserName(e.target.value)
                                                }
                                            />
                                            <label className="form-label" for="form2Example17"
                                            >Tài khoản</label
                                            >
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input
                                                type="password"
                                                id="form2Example27"
                                                className="form-control form-control-lg"
                                                name="password"
                                                onChange={(e) =>
                                                    setpassword(e.target.value)
                                                }
                                            />
                                            <label className="form-label" for="form2Example27"
                                            >Mật khẩu</label
                                            >
                                        </div>
                                        <div className="pt-1 mb-4 text-center">
                                            <button class="btn btn-lg btn-block text-light" style={{ backgroundColor: ' #ffc107', }} onClick={handleSubmit}>
                                                Đăng nhập
                                            </button>
                                        </div>
                                        <div class="mb-3 text-start text-danger fs-6">
                                            <span class="text-danger">{error}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
