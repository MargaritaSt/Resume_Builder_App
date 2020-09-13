import axios from 'axios';


export default function getResume(props) {
  return  axios.post('/resume/resume', { userId: props })
    .then(response =>  response)
    .catch(error => console.log('Error:', error));
}