import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom';

export default function Register() {
  const navigate= useNavigate();

  const [user, setUser]=useState({
      username : "",
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
  const{username,email,password}=user;
  try{
    const res=await fetch('/register',{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
       body : JSON.stringify({
        username,email,password
       })
    })
    if(res.status===400||!res){
      window.alert("already used detail")
    }
    else
    {
      window.alert("registered successfully");
      navigate('/login');
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
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username"  name = 'username' value={user.username} onChange={handelInput}/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
        
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
