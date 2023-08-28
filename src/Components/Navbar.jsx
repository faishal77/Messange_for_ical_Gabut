import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
   <>
        <div className="background_Navigasi_Bar">
           <NavLink to='/Home' className={({isActive})=> (isActive ?'Actif_Chat':'Non_Actif_Chat')}></NavLink>
           <NavLink to='/CreateMessange' className={({isActive})=> (isActive ?'Actif_Create_Messange':'Non_Actif_Create_Messange')}></NavLink>
           <NavLink to='/Setting' className={({isActive})=> (isActive ?'Actif_Setting':'Non_Actif_Setting')}></NavLink>       
        </div>    
   </>
  )
}

export default Navbar