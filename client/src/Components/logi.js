import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import myimg from './login-bg.png'
import './logi.css'
export default function Logi() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  // handle inputs

  const handelInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  }

  // handle submit 
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = user;
    try {
      const res = await fetch('/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email, password
        })
      })
      console.log(email)
      if (res.status === 400 || !res) {
        window.alert("Invalid Credential")
      }
      else {
        window.alert("Login successfull");
        navigate('/');
        window.location.reload();
      }


    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className='main'>
      <div className='logdes'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 ' id="img">
              <div className='img_container'>
              <img className="image" src={myimg} alt="hi" width={400}></img>
              </div>
            </div>
            <div className='col-md-6 lg'>
              <Form onSubmit={handleSubmit} method="POST">
                <h1 className='display-5'>LOGIN</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name='email' value={user.email} onChange={handelInput} />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name='password' value={user.password} onChange={handelInput} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
