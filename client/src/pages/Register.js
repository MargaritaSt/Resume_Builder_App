import React, { useState } from "react";
import "./style.css";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default function Register(props) {
  const history = useHistory();
  const { setUsername, setUserId, } = props;

  const [registerState, setRegisterState] = useState( {
    userName: "",
    password: "",
    userId: ""
  });
 
  const [error, setError] = useState({
    userError: "",
    emailError: "",
    passwordError: "",
    confirmError: ""
  })
 
  //Update local state when any field changes. The 'name' variable is the key of the field
  const Change = (event) => { 
  const { name, value } = event.target
  setRegisterState(prev => ({
    ...prev,
   [name]: value
    }))
  }
  
  const save = (event) => {
    event.preventDefault();
    setError('')
    let anyError = false;
    
    if (registerState.userName === '') {
     setError(prev => ({
       ...prev,
       userError:"Required field" 
     })
    )
    anyError = true;
    }

    if (registerState.email=== '') {
      setError(prev => ({
        ...prev,
        emailError:"Required field" 
      }) 
    )
    anyError = true;
    }

    if (registerState.password=== '') {
      setError(prev => ({
        ...prev,
        passwordError:"Required field" 
      }) 
    )
    anyError = true;
    }

    if (registerState.confirmPassword=== '') {
      setError(prev => ({
        ...prev,
        confirmError:"Required field" 
      }) 
    )
    anyError = true;
    }

    if (registerState.password !== registerState.confirmPassword){
      setError(prev => ({
        ...prev,
        confirmError:"Passwords do not match" 
      }) 
    )
    anyError = true;
    }

    if (registerState.password.length < 6) {
      setError(prev => ({
        ...prev,
        passwordError:"Passwords must consist of at least 6 characters." 
      }) 
    )
    anyError = true;
    }

    //If field validation successful then pass userName, email and password to db. If the userName or email exists in db then show error message otherwise save the data to db and setUsername from local state and setUserId from cookies and riderect them to templates form.
    if (anyError === false) {
      axios.post('/users', { email: registerState.email, password: registerState.password, name: registerState.userName,withCredentials: true  })
      .then(response => {
        if(response.data === false) {
          setError(prev => ({
            ...prev,
          confirmError: "Username or email already exists !" 
          }) 
        );
          return
        } else { 
            setUsername(registerState.userName) 
            setUserId(cookies.get('userId')) 
            history.push('/templates')
        }
      })
      .catch(error => setError(error));
    }
  }
  
  return (
    <header>
      <main className="container flex flex-column items-center justify-center signup">
        <form
          onSubmit={save}
          className="flex signup-form"
          style={{ paddingLeft: "0px" }}
        >
          <aside className="flex flex-column justify-center items-center">
            <h1>hello, friend!</h1>
            <h2>
              by creating your account your agree to our privacy and policy.
            </h2>
            <button  type="button">
              <a href="/login" className="text-white">
                LOGIN
              </a>
            </button>
          </aside>
          <div className="content flex flex-column justify-center items-center">
            <div className="text">
              <h1>create account</h1>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your username"
                name="userName"
                onChange= {Change}
              />
           <section className="userValidation">{error.userError}</section>
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="someone@email.com"
                name="email"
                onChange={Change}
              />
              <section className="userValidation">{error.emailError}</section>
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={Change}
              />
              <section className="userValidation">{error.passwordError}</section>
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={Change}
              />
              <section className="userValidation">{error.confirmError}</section>
            </div>
            <div className="form-group">
              <input  type="submit" value="SIGNUP" />
            </div>
          </div>

        </form>
      </main>
    </header>
  );
}