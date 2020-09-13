import "./style.css";
import axios from 'axios';
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default function Login(props) {
  const history = useHistory();
  const { setUsername, setUserId} = props;

  const [loginState, setLoginState] = useState( {
    userName: "",
    password: "",
    userId: ""
  });
  
  const [error, setError] = useState({
    userError:"",
    passwordError:"",
    userpassError:""
  })
  
  //Update local state when any field changes. The 'name' variable is the key of the field
  const Change = (event) => {
    const { name, value } = event.target
      setLoginState(prev => ({
        ...prev,
        [name]: value
      }))
  }
  
  const login = (event) => {
    event.preventDefault()
    setError('');
    let anyError = false;

    if (loginState.userName === '') {
      setError(prev => ({
        ...prev,
        userError:"Username is required" 
        }) 
      );
      anyError = true;
    }

    if (loginState.password === '') {
      setError(prev => ({
        ...prev,
        passwordError:"Password is required" 
        }) 
      );
      anyError = true;
    } 

    //If field validation successful then pass userName and password to db. If the userName exists in DB then setUsername from local state and setUserId from cookies and riderect them to templates form.
    if(anyError === false) {
      event.preventDefault()
      axios.post('/users/login', { userName: loginState.userName, password:loginState.password, withCredentials: true})
      .then(response => {
        if(response.data === false){
          setError(prev => ({...prev, userpassError: "Wrong username or password"}))
        } else {
              setUsername(loginState.userName) 
              setUserId(cookies.get('userId'))
              history.push('/templates')
        }
      })
      .catch(error => console.log(error))
    }
  }
 
  return (
    <header>
      <main className="container flex flex-column items-center justify-center login">
        <form  
         onSubmit={login}
          className="flex justify-between login-form"
          style={{ paddingRight: "0px" }}
        >
          <div className="content flex flex-column justify-center items-center">
            <div className="text flex flex-column justify-center items-center">
              <h1>user login</h1>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="enter your username"
                name="userName"
                onChange={Change}
                
              />
              <section className="userValidation">{error.userError}</section>
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                
                onChange={Change}
              />
              <section className="userValidation">{error.passwordError}</section>
              <section className="userValidation">{error.userpassError}</section>
              <span
                className="full float-right"
                aria-label="toggle password visibility"
              >
              </span>

            </div>
            <div className="form-group">
              <input type="submit" value="LOGIN"/>
            </div>
          </div>
          <aside className="flex flex-column justify-center items-center">
            <h1>welcome, back!</h1>
            <h2>
              by creating your account your agree to our privacy and policy.
            </h2>
            <button type="button">
              <a href="/register" className="text-white">
                SIGNUP
              </a>
            </button>
          </aside>
        </form>
      </main>
    </header>
  );
}