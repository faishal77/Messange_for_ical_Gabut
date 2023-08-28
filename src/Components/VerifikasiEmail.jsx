import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const VerifikasiEmail = () => {
  const Navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
      Navigate('/home')
    }else{
      Navigate('/')
    }
  })
  return (
    <>
      <NavLink to={'/login'}>
        <div className="row_back"></div>
      </NavLink>
      <div className="picture_Verifikasi_Email"></div>
      <div className="background_text_verify_email">
        <h5 className='text_verify_email'>We have sent an Email
          <br />to ******@gmail.com
        </h5>
        <h3 className='text_check_verify'>Check Email to verify account</h3>
      </div>
      <NavLink to={'https://mail.google.com/mail/u/0/#inbox'}>
        <button class="btn waves-effect waves-light verifikasi_btn" type="submit" name="action">Go to email</button>
      </NavLink>
    </>
  )
}

export default VerifikasiEmail