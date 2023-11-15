import React from 'react'

export default function Information(props) {
    const {user} = props
  return (
    <li>xin chào: {user.userName}</li>
  )
}
