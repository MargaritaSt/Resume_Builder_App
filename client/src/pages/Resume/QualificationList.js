import React from 'react';
import Qualification from "./Qualification";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function QualificationList(props) {
  const { resumeState, setResumeState, userId, isResumeCompleted} = props;
  const history = useHistory();
  
  //the function saves the new resume to DB 
  const saveResume=() => {
    if (isResumeCompleted(resumeState)) {
      const resumeData = {
        profile: resumeState.profile,
        summary: resumeState.summary,
        educations: resumeState.educations,
        achievements: resumeState.achievements,
        experiences: resumeState.experiences,
        core_competencies: resumeState.core_competencies
      } 
      axios.post('/resume', {resume_data: resumeData, user_id: userId })
          .then(response => {setResumeState(response.data.resume_data)
          history.push("/download");
          })
        .catch(error => console.log('Error:', error));
      } else {
      console.log('please enter data');
    }
  }

  //the function adds new empty education object to the resumeState and shows a new education form
  const addQualification = () => {
    setResumeState(prev => ({...prev, 
      educations:[...prev.educations,
        {id:resumeState.educations.length + 1, 
          institution:'', 
          type_degree:'', 
          graduat_date:'', 
          country:''
        }
      ]
    }))
  }
  
  //the function goes through educations array and pusses one education object and index of current object to the Qualification.js 
  const renderEducation =() => {
    const educationData = resumeState.educations.map((education, educationIndex) => {
    return ( 
     <Qualification
        key={education.id}
        index = {educationIndex}
        resumeState={education}
        educations={resumeState.educations}
        setResumeState={setResumeState}/> 
    )
    })
    return educationData
  }
 
  return (
    <div>
      <div>
          {renderEducation()} 
      </div> 
      <div  
        style={{
          display: "flex", 
          flexDirection: "column", 
          padding: "20px", 
          alignItems: "center"}}>
        <Button 
          style={{ 
            width: "300px", 
            height: "40px", 
            border: "transparent", 
            borderRadius: "20px", 
            textAlign: "center", 
            backgroundImage: "linear-gradient(to right, #8a4278, #cc0099)", 
            color: "#fff", 
            fontFamily: "Montserrat, sans-serif", 
            fontSize: "1rem", 
            textTransform: "capitalize", 
            cursor: "pointer"}} 
            variant="primary" type="submit" onClick= {addQualification}>
          Add more Qualification
        </Button>
        <br/>
        <Button 
          style={{
            backgroundImage: "linear-gradient(to right, #bc4e9c, #f80759)", 
            border: "transparent"}}
            type="submit" onClick= {saveResume} >
          Preview in Pdf
        </Button>
      </div>
    </div>
    )
}