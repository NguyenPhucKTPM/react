import React, { useState } from 'react'

export default function Login() {
    const [userName, setUserName] = useState('');
    const [password, setpassword] = useState('');
    const [role, setRole] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLogin(true);
        console.log('dang nhap: ', isLogin);
        console.log('username: ', userName);
        console.log('password: ', password);
        console.log('role: ', role)
    }
    return (
        <div>
            <h4>Login</h4>
            <div className='form-group'>
                <label htmlFor="">Tài khoản: </label>
                <input type="text" onChange={(e) =>
                    setUserName(e.target.value)
                }
                />
            </div>
            <div className='form-group'>
                <label htmlFor="">Mật khẩu: </label>
                <input type="text" onChange={(e) =>
                    setpassword(e.target.value)
                }
                />
            </div>
            <div className='form-group'>
                <label htmlFor="#role">Admin</label>
                <input
                    id='role'
                    type='checkbox'
                    onChange={(e) => {
                        setRole(
                            (prevState) =>
                                !prevState
                        );
                    }}
                />
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}
