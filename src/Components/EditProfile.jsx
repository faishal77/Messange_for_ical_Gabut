import React, { useState } from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import { onAuthStateChanged, updateProfile } from 'firebase/auth'
import { auth } from '../Config/Firebase';

const EditProfile = () => {
  const [ImgUrl, setImgUrl] = useState('')
  const [Time, setTime] = useState('')
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [user, setUser] = useState(null);

  const UpdateProfile = (e) =>{
    e.preventDefault()
    updateProfile(auth.currentUser, {
      displayName: Name, 
      email:Email
    }).then(() => {
      toast.success(`${Name} Berhasil edit profile`, {
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
      toast.error('Upss tidak bisa edit profile', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      
    });
  }

  let ImgNoPicture = 'https://i.postimg.cc/05nC49wk/wolf.png'
  let data = JSON.parse(localStorage.getItem('User-Register'))

  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      let ImgUrl = user.photoURL
      let Name = user.displayName
      let Email = user.email
      let time = user.metadata.creationTime
      // let ProviderID = user.providerData[0]
      setTime(time)
      setEmail(Email)
      setImgUrl(ImgUrl)
      // setProviderId(ProviderID)
      setName(Name)
    } else {
      Navigate('/signup')
    }
  });
  return (
    <>
      <NavLink to='/Setting'>
        <div className="row_back_Information"></div>
      </NavLink>
      <div className="background_Text_and_logo_information">
        <h1 className='Information_text'>Edit Profile</h1>
      </div>
      <div className="background_edit_profile">
        {
          ImgUrl ? <div className="avatar avatar_edit_profile online ">
            <div className="w-24 rounded-full">
              <img src={ImgUrl} />
            </div>
          </div>
            :
            <div className="avatar avatar_edit_profile online ">
              <div className="w-24 rounded-full">
                <img src={ImgNoPicture} />
              </div>
            </div>
        }

        {
          data ?
            <input value={Name}
              onChange={(e) => setName(e.target.value)} type="text" placeholder={data.displayName} className="input input_edit_profile input-bordered input-warning w-full max-w-xs" />
            :
            <input value={Name}
              onChange={(e) => setName(e.target.value)} type="text" placeholder={Name} className="input input_edit_profile input-bordered input-warning w-full max-w-xs" />
        }
        {/* {Provider.providerId === 'google.com'  ? (
        <input type="text" placeholder={Name} className="input input_edit_profile input-bordered input-warning w-full max-w-xs" />
      ) :Provider.providerId === 'github' ? (
        <input type="text" placeholder={Name} className="input input_edit_profile input-bordered input-warning w-full max-w-xs" />
      ) : data.displayName ? (
        <input type="text" placeholder={data.displayName} className="input input_edit_profile input-bordered input-warning w-full max-w-xs" />
      ) : (
       Navigate('/')
      )} */}
        <input  onChange={(e) => setEmail(e.target.value)} value={Email} type="email" placeholder={Email} className="input input-bordered input-warning w-full max-w-xs" />
        <input type="text" placeholder={Time} className="input input-bordered w-full max-w-xs" disabled />
        <button onClick={updateProfile} className="btn btn-primary">Save</button>
      </div>
    </>
  )
}

export default EditProfile