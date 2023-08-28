import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth, provider, providerFacebook, providerGithub } from '../Config/Firebase'
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup } from 'firebase/auth'
import LoadingAnimimation from './Loading'
import { toast } from 'react-toastify';

const Register = () => {
  const Navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [displayName, setName] = useState("")
  const [password, setPassword] = useState("")
  const [Loading, setLoading] = useState(false)
  const [User, setUser] = useState({})

  const LoginWithEmailAndPassword = (e) => {
    e.preventDefault()
    const data = { email, password, displayName }
    if (displayName.length < 1 || password.length < 1 || email.length < 1) {
      toast.warning('Upss Nama,Email dan Password wajib diisi', {
        position: toast.POSITION.TOP_CENTER
      });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setLoading(true)
          sendEmailVerification(auth.currentUser)
            .then((response) => {
              setTimeout(() => {
                setLoading(false)
                Navigate('/Verifikasi-email')
                console.log(response)
              }, 7000)
            }).catch((error) => {
              alert(error.messange)
            })
          console.log(user)
        })
        .catch(() => {
          toast.error('Invalid Periksa Email dan Password Anda', {
            position: toast.POSITION.TOP_CENTER
          });
        });
      localStorage.setItem("User-Register", JSON.stringify(data));
    }
  }

  const LoginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((response) => {
        setLoading(true)
        setTimeout(() => {
          setUser(response)
          setLoading(false)
          localStorage.setItem("isAuth", true)
          Navigate('/home')
        }, 7000)
      })
  }

  const LoginWithGithub = () => {
    signInWithPopup(auth, providerGithub)
      .then(() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
          localStorage.setItem("isAuth", true)
          Navigate('/home')
        }, 7000)
      })
  }
  return (
    <>
      {
        Loading && <LoadingAnimimation />
      }
      <NavLink to={'/'}>
        <div className="row_back"></div>
      </NavLink>
      <h1 className='Text_login'>Hi!</h1>
      <h2 className='Sign_In_To_Continue'>Create a new account</h2>
      <div className="background_form">
        <form onSubmit={LoginWithEmailAndPassword} method={"post"} class="col s12">
          <input type="text" placeholder="Name" name={displayName} value={displayName} onChange={(e) => setName(e.target.value)} className="input  input-bordered input-info w-full max-w-xs" />
          <input type="email" name={email} Value={email} onChange={(e) => setEmail(e.target.value)} id="email" autoComplete='off' placeholder="Email" className="input_password input input-bordered input-accent w-full max-w-xs" />

          <input type="password" value={password} name={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="input input_password input-bordered input-info w-full max-w-xs" />
          <button className="btn btn-active btn-accent Login_btn_login">Sign Up</button>
        </form>
        <div className="border_or">
          <div className="line"></div>
          <div className="divider mt-1">OR</div>
          <div className="line"></div>
        </div>

        <h1 className='text_social_login'>Social Media Login</h1>
        <div className="social_media_login">
          <button onClick={LoginWithGoogle} className="btn btn-circle">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR43Wmhdy1tqgJABRfNQ-qtn-eKtqCSzZQ9Og&usqp=CAU' alt="" srcset="" />
          </button>
          <button onClick={LoginWithGithub} className="btn btn-circle">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUKfh_qin590VkMesYSo4MfcO8RrbBKUs6wg&usqp=CAU' alt="" srcset="" />
          </button>
        </div>
      </div>
    </>
  )
}

export default Register