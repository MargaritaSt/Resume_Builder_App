import React from 'react';
import Qualification from "./Experience";
import Button from 'react-bootstrap/Button';

export default function ExperienceList(props) {
  const { resumeState, setResumeState } = props;
  
  //the function adds new empty experience object to the resumeState and shows a new experience form
  const addExperience = () => {
    setResumeState(prev => ({...prev, 
      experiences:[...prev.experiences,
        {id:resumeState.experiences.length + 1, 
          job_title: '',
          employer_name: '',
          employer_description: '',
          city: '',
          country: '',
          start_date: [],
          end_date: [],
          responsibilities: []
        }
      ]
    }))
  }
  
  //the function goes through experiences array and pusses one experience object and index of current object to the Experience.js 
  const renderExperience =() => {
    const experienceData = resumeState.experiences.map((experience, experienceIndex) => {
    return ( 
     <Qualification
        key={experience.id}
        index = {experienceIndex}
        resumeState={experience}
        experiences={resumeState.experiences}
        setResumeState={setResumeState}/> 
    )
    })
    return experienceData
  }
 
  return (
    <div>
      <div>
          {renderExperience()} 
      </div> 
      <div style={{display: "flex",flexDirection: "column", padding: "20px", alignItems: "center"}}>
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
        variant="primary" type="submit" onClick= {addExperience} >
        Add more Experience
      </Button> 
      </div>
    </div>
    )
}
