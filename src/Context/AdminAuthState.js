import { useState } from 'react'
import AdminContext from "./AdminContext";
const AdminAuthState=(props)=>{
    const [authState,setauthState]=useState({
        "loginstatus":false,
        "name":""
    })
  return (
    <AdminContext.Provider value={{"authState":authState,"setauthState":setauthState}}>
        {props.children}
    </AdminContext.Provider>
  )
}

export default AdminAuthState
