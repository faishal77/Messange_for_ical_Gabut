import React, { useEffect, useState } from 'react'
import { auth } from '../Config/Firebase';
import { onAuthStateChanged, } from 'firebase/auth'
import { NavLink, useNavigate } from 'react-router-dom';
import ChatBuble from './ChatBuble';

export const CreateMessange = () => {
  const [Name, setName] = useState('')
  const Navigate = useNavigate()
  const [Provider, setProviderId] = useState('')

  let data = JSON.parse(localStorage.getItem('User-Register'))
  
  useEffect(() => {
    if (!localStorage) {
      Navigate('/login')
    }
  })
  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      let Name = user.displayName
      let ProviderID = user.providerData[0]
      setName(Name)
      setProviderId(ProviderID)
      console.log('Create Messange', Name)
    } else {
      Navigate('/signup')
    }
  });
  return (
    <>
      <div className="Background_settings">
        <div className="background_for_name_and_back">
          <NavLink to='/home'>
            <div className="row_back_Home"></div>
          </NavLink>
          {
            data === 'User-Register' ?
            
        data.displayName.length > 17 ? (
          <h1 className='text_Name_CreateMessange'>{data.displayName}</h1>
        ) : (
          <h1 className="Name_Messange_from_Login">{data.displayName}</h1>
        )

            :
            Name.length > 17 ? (
              <h1 className='text_Name_CreateMessange'>{Name}</h1>
            ) :(
              <h1 className="Name_Messange_from_Login">{Name}</h1>
            )
    

          }
          {/* {Provider.providerId === 'google.com' ? (   
        Name.length > 17 ? (
          <h1 className='text_Name_CreateMessange'>{Name}</h1>
        ) :(
          <h1 className="Name_Messange_from_Login">{Name}</h1>
        )

      ) : Provider.providerId === 'github' ? (

        Name.length > 17 ? (
          <h1 className='text_Name_CreateMessange'>{Name}</h1>
        ) :(
          <h1 className="Name_Messange_from_Login">{Name}</h1>
        )

      ) : (

        data.displayName.length > 17 ? (
          <h1 className='text_Name_CreateMessange'>{data.displayName}</h1>
        ) : (
          <h1 className="Name_Messange_from_Login">{data.displayName}</h1>
        )

      )} */}
        </div>
      </div>
      <div className="background-Messange">
        <div className="Input_Messange_Background_all">
          <input type="text" placeholder="Your Name" className="input input-bordered input-accent w-full max-w-xs mt-3" />
          <input type="text" placeholder="Messange for Ical" className="input input-bordered input-accent w-full max-w-xs mt-3" />
          <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs mt-3" />
          <button className="btn btn-outline btn-accent mt-20 w-25 ">Send Now!!</button>
        </div>
      </div>
    </>
  )
}
