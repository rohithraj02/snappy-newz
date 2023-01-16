import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';

function Login() {

  // const history=useHistory();
  const navigate= useNavigate();

  const [user, setUser]=useState({
      username : "",
      email : "",
      password : ""
  });

  // handle inputs
 
  const handelInput=(event)=>{
    let name=event.target.naem;
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
        'content-Type':"application/json"
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
      // history.pushState('/lg');
      navigate('/login');
    }


  }catch(error)
  {
console.log(error);
  }

}

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            RegisterS
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

      
          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' />
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
          <p className="text-center">Not a member? <a href="#!">Register</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'} onSubmit={handleSubmit} method="POST">
          {/* <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' /> */}
          <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' name = 'username' value={user.username} onChange={handelInput}/>
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' name = 'email' value={user.email} onChange={handelInput}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' name='password' value={user.password} onChange = {handelInput} />

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100" type='submit' >Sign up</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Login;