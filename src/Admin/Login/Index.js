import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import axios from "axios"
import AdminContext from '../../Context/AdminContext';
import { useNavigate } from 'react-router-dom';
export default function Index() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const auth=useContext(AdminContext)
    const navigate=useNavigate();
    const submit=(e)=>{
        e.preventDefault();
        let admin={
            userId:email,
            password:password
        };
        axios.post("http://localhost:8081/e-mantrana/admin/login",admin).
        then(res=>{
            localStorage.setItem('adminauthenticate',res.data.jwt);
            auth.setauthState({
                "loginstatus":true,
                "name":email
            }
            )
            navigate("/admin/dashboard")
        })
        .catch(error=>{
            console.log(error);
            alert("Bad Credentials");
            setEmail("");
            setPassword("");
        });
    }
  return (
    <div className='container'>
        <form onSubmit={submit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e)=>setEmail(e.target.value)} aria-describedby="emailHelp" placeholder="Enter email" required/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    </div>
  )
}
