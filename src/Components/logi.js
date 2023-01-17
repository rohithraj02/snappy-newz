import React,{useState,useContext} from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import React, { useState } from 'react';
// import {useHistory} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import App from '../App';
import Navbar from './Navbar';
import { UserContext } from '../App';
export default function Logi() {
  const {state,dispatch}=useContext(UserContext);
  const navigate= useNavigate();

  const [user, setUser]=useState({
      email : "",
      password : ""
  });

  // handle inputs
 
  const handelInput=(event)=>{
    let name=event.target.name;
    let value=event.target.value; 

    setUser({...user,[name]:value});
  }

// handle submit 
const handleSubmit = async (event)=>{
  event.preventDefault();
  const{email,password}=user;
  try{
    const res=await fetch('/login',{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
       body : JSON.stringify({
        email,password
       })
    })
    if(res.status===400||!res){
      window.alert("Invalid Credential")
    }
    else
    {
      dispatch({type:"USER",payload:true})
      window.alert("Login successfully");
    //   history.pushState('/lg');
    // process.env.isLoggedIn=true;
      navigate('/');
      // window.location.reload();
      // return(
      //   <Navbar isLoggedIn={true}></Navbar>
      // )
    }


  }catch(error)
  {
console.log(error);
  }

}
  return (
<div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5'>
                        <h1 className='display-4'>Welcome Back</h1>
                        <p className='lead'>Enter Your credentials to login</p>
                        <h5>or</h5>
                        <NavLink to='/register' className='btn btn-outline-light rounded-pill pb-2 w-50'></NavLink>
                    </div>
                    <div className='col-md-6'>
                        <h1 className='display-6'>LOGIN</h1>
                        <Form onSubmit={handleSubmit} method="POST">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name = 'email' value={user.email}  onChange={handelInput} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name = 'password' value={user.password}  onChange = {handelInput}  />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
  )
}
