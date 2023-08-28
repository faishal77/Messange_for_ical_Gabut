import React, { useEffect, useState } from 'react'
import { auth } from '../Config/Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import Navbar from './Navbar';

const Home = () => {
  const [ImgUrl, setImgUrl] = useState('')
  const [EmailVerifived, setVerifyEmail] = useState('')
  const Navigate = useNavigate()
  
  let ImgNoPicture = 'https://i.postimg.cc/05nC49wk/wolf.png'
  let data = JSON.parse(localStorage.getItem('User-Register'))
  console.log('ini data register',data)
  if (EmailVerifived === false) {
    Navigate('/')
  } else {
  useEffect(() => {
    if (!localStorage) {
      Navigate('/login')
    }
  })
  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      let ImgUrl = user.photoURL
      let Verify = user.emailVerified
      setImgUrl(ImgUrl)
      setVerifyEmail(Verify)
    } else {
      Navigate('/Login')
    }
  });  
  }
  
  return (
    <>
      <div className="background_home_pp_notification">
        <div className="logo"><b className='F'>F</b><b className='R'>R</b></div>
        {

          ImgUrl ? <div className="avatar online">
            <div className="w-15 h-12 rounded-full">
              <img src={ImgUrl} />
            </div>
          </div> : <div className="avatar online">
            <div className="w-15 h-12 rounded-full">
              <img src={ImgNoPicture} />
            </div>
          </div>
        }
      </div>
      <div className="background_Search">
        <div className="form-control">
          <div className="input-group">
            <input type="text" placeholder="Search messange" className="input input-bordered" />
            <button className="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </div>
      </div>
      <div className="background_say_hello">
        <div className="background_title_messange">
          <h2 className='Messange_title'>Messange</h2>
        </div>
        <Card />
        <Navbar />
      </div>
    </>
  )
}

export default Home