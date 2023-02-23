import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminContext from '../../Context/AdminContext';

export default function Index(props) {
    const {Component}=props;
    const navigate=useNavigate();
    const auth=useContext(AdminContext);
    useEffect(()=>{
        console.log(auth.authState.loginstatus)
        if(!auth.authState.loginstatus){
            navigate('/admin/login')
        }
    },[])
  return (
    <>
      <Component/>
    </>
  )
}
