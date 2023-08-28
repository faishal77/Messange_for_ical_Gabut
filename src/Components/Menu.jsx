import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const Menu = () => {
  const Navigate = useNavigate()
  useEffect(() => {
    if (localStorage) {
      Navigate('/home')
    }
  })
  return (
    <>
      <div className="picture"></div>
      <div className="border_text">
        <h2 className='Say_Hello_Home'>Hello !</h2>
        <div className="Content_Home">
          <p>Best place to write life strories and share your journey expriences</p>
        </div>
        <NavLink to={'/login'}>
          <button className='Login_btn' type="btn">LOGIN</button>
        </NavLink>
        <NavLink to={'/signup'}>
          <button className="btn Sign_up__btn btn-outline">Signup</button>
        </NavLink>
      </div>
    </>
  )
}
