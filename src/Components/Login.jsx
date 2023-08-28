import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth, provider, providerGithub } from '../Config/Firebase'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import LoadingAnimimation from './Loading'
import { toast } from 'react-toastify';
import { onAuthStateChanged, } from 'firebase/auth'

const Login = () => {

  const Navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [EmailVerified, setEmailVerified] = useState("")
  const [Loading, setLoading] = useState(false)
  const [User, setUser] = useState({})

  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      let emailVerified = user.emailVerified
      setEmailVerified(emailVerified)
    }
  });
  
  if (EmailVerified === true) {
   Navigate('/home')
  }else{
    Navigate('/Verifikasi-Email')
  } 
  const LoginWithEmailAndPassword = (e) => {
    e.preventDefault()
    const data = { email, password }
    localStorage.setItem("User-Register", JSON.stringify(data));
    {
      if (email.length < 1 || password.length < 1) {
        Navigate('/login')
        setLoading(false)
        toast.warning('Upps Email dan Password Ga boleh kosong !', {
          position: toast.POSITION.TOP_CENTER
        });
      } else {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            setLoading(true)
            if (!user.emailVerified) {
              Navigate('/Verifikasi-email')
            } else {
              setTimeout(() => {
                setLoading(false)
                localStorage.setItem("isAuth", true)
                Navigate('/home')
              }, 7000);
            }
            setUser(user)
          })
          .catch(() => {
            toast.error('Invalid Periksa Email dan Password Anda', {
              position: toast.POSITION.TOP_CENTER
            });
          });
      }
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
        console.log(response)
      })
  }

  const LoginWithGithub = () => {
    signInWithPopup(auth, providerGithub)
      .then((response) => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
          localStorage.setItem("isAuth", true)
          Navigate('/home')
        }, 7000)
        console.log(response)
      })
  }
  return (
    <>
      {
        Loading && <LoadingAnimimation />
      }
      <NavLink to='/'>
        <div className="row_back"></div>
      </NavLink>
      <h1 className='Text_login'>Welcome !</h1>
      <h2 className='Sign_In_To_Continue'>Sign In to continue</h2>
      <div className="background_form">
        <form onSubmit={LoginWithEmailAndPassword} method={"post"} class="col s12">
          <input type="email" name={email} Value={email} onChange={(e) => setEmail(e.target.value)} id="email" autoComplete='off' placeholder="Email" className="mt-3 input input-bordered input-accent w-full max-w-xs" />

          <input type="password" value={password} name={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="mt-5 input input_password input-bordered input-info w-full max-w-xs" />
          <button type='submit' className="btn btn-active btn-accent Login_btn_login">Login</button>

        </form>

        <NavLink to={'/Forgot-Password'}>
          <h2 className='text_forgot_password_login'>Forgot Password?</h2>
        </NavLink>

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

export default Login

