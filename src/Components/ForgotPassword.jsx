import React, { useState } from 'react'
import { auth, } from '../Config/Firebase'
import { NavLink, useNavigate } from 'react-router-dom'
import { sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const [Email,setemail] = useState('')
    const Navigate = useNavigate()
    const handlePasswordReset = (e) => {
        e.preventDefault()
        sendPasswordResetEmail(auth,Email)
          .then((data) => {
            toast.success(`${Email} Email reset password telah terkirim`, {
                position: "top-right",
                autoClose: 7000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
              Navigate('/login')
            })
          .catch((error) => {
            console.log('ini eror dari',error)
            toast.error('Upss Email tidak valid!', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          });
      };
      
    return (
        <>
            <NavLink to='/Login'>
                <div className="row_back_Information"></div>
            </NavLink>
            <div className="background_Text_and_logo_information">
                <h1 className='Information_text_forgot_password'>Forgot Password</h1>
            </div>
            <div className="picture_Forgot_Password"></div>
            <div className="background_forgot_password_for_reset_password">
                <h1 className='text_forgot_password'>Enter your Email
                <br/>to reset Password</h1>
                <form onSubmit={handlePasswordReset} method={"post"} class="col s12">
                <input value={Email} name={Email} onChange={(e) => setemail(e.target.value)}  type="email" placeholder="Email" className="input input-bordered input-accent w-full max-w-xs" />
                <button className="btn btn-active btn-accent btn_reset_password" type='submit'>Reset Password</button>
                </form>
            </div>
        </>
    )
}

export default ForgotPassword
