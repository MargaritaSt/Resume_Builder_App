import {useState, useEffect} from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function Autorization (props) {

  const [state, setState] = useState({
   userId: '',
   userName: '',
   email: '',
   password: '',
   confirmPassword: ''
  })
  
  useEffect (() => {
    if (cookies.get('userName')) {
      setState(prev => ({
        ...prev,
        userName: cookies.get('userName'),
        userId: cookies.get('userId')   
      }))
    } 
  },[])

  const setUsername = name => {
    setState(prev => ({...prev, userName: name}))
  }
  const setUserId = id => {
    setState(prev => ({...prev, userId: id}))
  }

  const remove = () => {
    setState(prev => ({...prev, userName: null, userId: null}))
    cookies.remove('userName')
    cookies.remove('userId')
  }
  
  return {state, remove, setState, setUsername, setUserId }
}