import React from 'react'
import { Link } from 'react-router-dom'

export default function DanhMucNB() {
    const listDMNBN = [
        {
            id: 'dm1',
            tendm : 'Máy lạnh',
        },
        {
            id: 'dm2',
            tendm : 'Tủ lạnh',
        },
        {
            id: 'dm3',
            tendm : 'Robot hút bụi',
        }
    ]
  return (
    <>
        {listDMNBN.map((item) =>(
            <li><Link to={`sanpham/${item.id}`}>{item.tendm}</Link></li>
        ))}
    </>
  )
}
