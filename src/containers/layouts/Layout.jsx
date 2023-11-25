import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Children } from 'react'
import { ToastContainer, toast } from 'react-toastify'

export default function Layout({children}) {
  return (
    <>
    <div className='header'> {' '} <Header /></div>
    <div className='container p-0 outlet'>
      {children}
      </div>
      
    <div className='footer'>{' '}<Footer/></div>

    {/* thong bao */}
    <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </>
  )
}
