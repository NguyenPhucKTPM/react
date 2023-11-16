import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <ul>
        <li >
          <Link to={``} className='text-light' >
            Giới thiệu công ty
          </Link>
        </li>
        <li>
          <Link to={``} className='text-light'>
            Liên hệ và góp ý
          </Link>
        </li>
        <li>
          <Link to={``} className='text-light'>
            Tìm siêu thị
          </Link>
        </li>
        <li>
          <Link to={``} className='text-light'> Bảo hành</Link>
        </li>
      </ul>
    </>
  )
}
