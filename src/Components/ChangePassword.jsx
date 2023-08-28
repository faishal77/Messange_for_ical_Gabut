import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { auth } from '../Config/Firebase';
import { updatePassword } from 'firebase/auth';

const ChangePassword = () => {
    const [NewPasswordChange, setNewPasswordChange] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')

    function changepassword() {
        const user = auth.currentUser;
        if (ConfirmPassword === NewPasswordChange) {
            const newPassword = NewPasswordChange || ConfirmPassword;   
            updatePassword(user, newPassword).then(() => {
                toast.success('Succes Change Password', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
            }).catch((error) => {
              alert('gagal change password',error)
            });
        }else{
              toast.error('New Password harus sama dengan confirm password!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
        }
    }
    return (
        <>
            <NavLink to='/Setting'>
                <div className="row_back_Information"></div>
            </NavLink>
            <div className="logo_change_password"><b className='F_Change_Password'>F</b><b className='R_Change_Password'>R</b></div>
            <div className="border_change_password">
                <h2 className='text_change_password'>Change Your Password</h2>
                <h4 className='txt_paragraf_change_password'>Set your new password so you can Login
                    <br />and access FR
                </h4>
                <form onSubmit={changepassword} method={"post"} class="col s12 border_input_password_change_password">
                    <input type="password" value={NewPassword} name={NewPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Create New Password" className="mt-5 input input_password_change_password input-bordered input-info w-full max-w-xs" />
                    <input type="password" value={ConfirmPassword} name={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" className="mt-5 input input_password_change_password input-bordered input-info w-full max-w-xs" />
                    <button type='submit' className="btn btn-active btn-accent bg_change_password">Change Password</button>
                </form>

            </div>
        </>
    )
}

export default ChangePassword