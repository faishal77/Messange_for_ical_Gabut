import Navbar from './Navbar'
import React, { useEffect, useState } from 'react'
import { auth } from '../Config/Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import pencil from '../assets/Icons/editProfile.png'
import key from '../assets/Icons/key.png'
import logOut from '../assets/Icons/logout.png'
import logo_i from '../assets/Icons/Information.png'
import { toast } from 'react-toastify';

const Settings = () => {
  const [ImgUrl, setImgUrl] = useState('')
  const [Email, setEmail] = useState('')
  const [Name, setName] = useState('')
  const [Provider, setProviderId] = useState('')
  const Navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  let ImgNoPicture = 'https://i.postimg.cc/05nC49wk/wolf.png'
  let data = JSON.parse(localStorage.getItem('User-Register'))

  const LogOutPopUp = async () => {
    try {
      await auth.signOut();
      localStorage.clear();
      Navigate('/login')
      if (data) {
        toast.success(`${data.displayName},Berhasil LogOut`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });  
      }else{
        toast.success(`${Name},Berhasil LogOut`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        
      }
    } catch (error) {
      // toast.error('Upss Gagal LogOut!!', {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "colored",
      // });
    }

  }

  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className="modal-overlay">
        <div data-aos="fade-up" className="modal-content">
          <h1 className='txt_logout'>Logout</h1>
          <div className="line_modal"></div>
          <h3 className='text_popup_modal'>Are you sure you want to log out?</h3>
          <div className="background_modal_popup">
          <button className="btn btn-outline btn-secondary btn_cancel" onClick={onClose}>Cancel</button>
          <button onClick={LogOutPopUp} className="btn btn-active btn-accent btn_logout">LogOut</button>  
          </div>
          {children}
        </div>
      </div>
    );
  };
  
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!localStorage) {
      Navigate('/')
    }
  })
  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      let ImgUrl = user.photoURL
      let Name = user.displayName
      let Email = user.email
      let ProviderID = user.providerData[0]
      setEmail(Email)
      setName(Name)
      setImgUrl(ImgUrl)
      setProviderId(ProviderID)
    } else {
      Navigate('/')
     
    }
  });
  return (
    <>
      <div className="Border_title_settings">
        <h2 className='settings_text'>Settings</h2>
      </div>
      {
        ImgUrl ? <div data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" className="avatar avatar_one">
          <div className=" w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={ImgUrl} />
          </div>
        </div>
          :
          <div className="avatar avatar_one" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div className=" w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={ImgNoPicture} />
            </div>
          </div>
      }
      {
        data === 'User-Register' ? 
        
        data.displayName.length > 18 ? (
          <h1 className='large_Name'>{data.displayName}</h1>
        ) : data.displayName.length < 18 ? (
          <h1 className='say_hello_settings'>{data.displayName}</h1>
        ) : data.displayName.length > 25(
          <h1 className='large_Name_all'>{data.displayName}</h1>
        )

        :
        Name.length > 18 ? (
          <h1 className='large_Name'>{Name}</h1>
        ) : Name.length < 18 ? (
          <h1 className='say_hello_settings'>{Name}</h1>
        ) : Name.length > 25(
          <h1 className='large_Name_all'>{Name}</h1>
        )

      }
      {/* {Provider.providerId === 'google.com' ? (
        Name.length > 18 ? (
          <h1 className='large_Name'>{Name}</h1>
        ) : Name.length < 18 ? (
          <h1 className='say_hello_settings'>{Name}</h1>
        ) : Name.length > 25(
          <h1 className='large_Name_all'>{Name}</h1>
        )

      ) : Provider.providerId === 'github' ? (

        Name.length > 18 ? (
          <h1 className='large_Name'>{Name}</h1>
        ) : Name.length < 18 ? (
          <h1 className='say_hello_settings'>{Name}</h1>
        ) : Name.length > 25(
          <h1 className='large_Name_all'>{Name}</h1>
        )

      ) : (

        data.displayName.length > 18 ? (
          <h1 className='large_Name'>{data.displayName}</h1>
        ) : data.displayName.length < 18 ? (
          <h1 className='say_hello_settings'>{data.displayName}</h1>
        ) : data.displayName.length > 25(
          <h1 className='large_Name_all'>{data.displayName}</h1>
        )

      )} */}

      <NavLink to={'https://mail.google.com/mail/u/0/#inbox'}>
        <div className="Login_with_google_background">
          {
            Email.length > 1 ? <button className="btn btn-outline btn-info">{Email}</button> : <button className="btn btn-outline btn-accent">Button</button>
          }
        </div>
      </NavLink>
      <div className="All_bakcgorund_settings">
        <NavLink to={'/Edit-profile'}>
          <div className="background_edit_profile_settings" data-aos-duration="1100" data-aos="fade-down">
            <button className="btn btn-circle btn_edit mt-2 w-15 h-12">
              <img className='pencil' src={pencil} alt="" srcset="" />
            </button>
            <h2 className='text_edit_profile'>Edit Profile</h2>
          </div>
        </NavLink>
        <NavLink to={'/Change-Password'}>
          <div className="background_change_password" data-aos-duration="1300" data-aos="fade-up">
            <button className="btn btn-circle  btn_edit mt-2 w-15 h-12">
              <img className='key' src={key} alt="" srcset="" />
            </button>
            <h2 className='text_edit_profile'>Change Password</h2>
          </div>
        </NavLink>
        <NavLink to={'/Information'}>
          <div className="background_Information" data-aos-duration="1400" data-aos="fade-down">
            <button className="btn btn-circle  btn_edit mt-2 w-15 h-12">
              <img className='logout' src={logo_i} alt="" srcset="" />
            </button>
            <h2 className='text_edit_profile'>Information</h2>
          </div>
        </NavLink>
        <div onClick={handleOpenModal} className="background_LogOut" data-aos-duration="1600" data-aos="fade-up">
          <button className="btn btn-circle  btn_edit mt-2 w-15 h-12">
            <img className='logout' src={logOut} alt="" srcset="" />
          </button>
          <h2 className='text_edit_profile'>Log out</h2>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
      </Modal>
      <Navbar />
    </>
  )
}

export default Settings