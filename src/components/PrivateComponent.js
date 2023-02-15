import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'
export default function PrivateComponent() {
  const auth = localStorage.getItem("user");
  return(
    auth?<Outlet/>:<Navigate to='/signup'/>//agar ek user hai localstorage me to tab outlet ke andar jonse saare component hai wahi show aur uske alawa koi show na ho aur agar user na ho tab signup wale page pe navigate karado
  )
}
