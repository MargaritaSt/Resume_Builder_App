import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

export default function Qualification(props) {
  const history = useHistory();
  
  const Change = (event) => { 
     const { id, value } = event.target;

    props.setResumeState(prev => {
      let newEducations = prev.educations.map((educ, index) => {
        if (index === props.index) {
          return {...educ, [id]: value};
        } else {
          return educ;
        }
      })
      return({...prev, educations: newEducations});
    });
  }

 //Deleting a specific element from educations array by clicking Delete button.
 const deleteQualification = () => {
  let newEducations = [];
  if (props.educations.length !== 1) {
     for (let index = 0; index < props.educations.length; index++  ){
      if (index !== props.index) {
        newEducations.push(props.educations[index]);
      } 
    }
    props.setResumeState(prev => ({...prev, 
      educations: newEducations
    }))
  }
}


  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      history.push("/summary");
    }
    setValidated(true);
  };
  
  return (
    <div>
      <Form noValidate validated={validated}
        style={{padding:  "20px", width: "100%"}}
        onSubmit={handleSubmit}
      >

    <Form.Group controlId="institution">
        <Form.Label>Institution Name: </Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Name of Institute" 
          required
          defaultValue = {props.resumeState.institution} 
          onChange= {Change}
        />
        <Form.Control.Feedback type="invalid">
              Please provide a Institution Name.
            </Form.Control.Feedback>
      </Form.Group>

      <Form.Group  controlId="type_degree">
        <Form.Label>Credential or Degree Title: </Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Your title of teh degree earned" 
          required
          defaultValue ={props.resumeState.type_degree} 
          onChange= {Change}
        />
        <Form.Control.Feedback type="invalid">
              Please provide a Degree Title.
            </Form.Control.Feedback>
      </Form.Group>
    <Form.Row>
    <Form.Group controlId="graduat_date">
        <Form.Label>Completion Year: </Form.Label>
        <Form.Control 
          type="number" 
          required
          placeholder="Enter year in which completed" 
          defaultValue ={props.resumeState.graduat_date} 
          onChange= {Change}
        />
        <Form.Control.Feedback type="invalid">
              Please provide a Completion Year.
            </Form.Control.Feedback>
        </Form.Group>

      <Form.Group controlId="country">
        <Form.Label>Country of Institute</Form.Label>
        <Form.Control 
          type="text" 
          required
          placeholder="e.g Canada" 
          defaultValue ={props.resumeState.country} 
          onChange= {Change}
        />
        <Form.Control.Feedback type="invalid">
              Please provide a Country of Institute.
            </Form.Control.Feedback>
      </Form.Group>
      </Form.Row>
      <div 
        style={{
          display: "flex", 
          flexDirection: "row", 
          alignItem: "center", 
          justifyContent: "space-between"}}>
        <Button 
          style={{ 
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
            variant="primary" onClick={deleteQualification}  type="button" >
          Delete Qualification
        </Button>
        <Button 
          style={{ 
            height: "40px", 
            border: "transparent", 
            borderRadius: "20px", 
            textAlign: "center", 
            backgroundImage: "linear-gradient(to right, #bc4e9c, #f80759)", 
            color: "#fff", 
            fontFamily: "Montserrat, sans-serif", 
            fontSize: "1rem", 
            textTransform: "capitalize", 
            cursor: "pointer"}} 
            variant="primary" type="submit">
          Save Qualification
        </Button>
      </div>
  </Form>
    </div>
  )
}

  