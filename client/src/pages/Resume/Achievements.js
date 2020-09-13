import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

export default function Achievements(props) { 
  const history = useHistory();

  //Update state when any field changes. The 'id' variable is the key of the item of achievements object
  const Change = (event) => {
    const { id, value } = event.target;
      props.setResumeState(prev => 
        ({...prev, achievements: {[id]: value } }))
  }

  //Fields validation, if successful to redirect to experience form  
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      history.push("/experience")
    }
    setValidated(true);
  };
  
  return (
    <Form 
      noValidate validated={validated}
      style={{padding:  "25px", flexDirection: "row", width: "40%"}}
      onSubmit={handleSubmit}
    >
      <Form.Group controlId="body">
        <Form.Label>
            List your major achievements
        </Form.Label>
        <Form.Control 
          as="textarea" rows="20" 
          required defaultValue ={
            (props.achievementsState.body === null) ? "" : props.achievementsState.body} onChange={Change}
        />
        <Form.Control.Feedback type="invalid">
            Please provide an achievements.
        </Form.Control.Feedback>
      </Form.Group>
      <Button 
        style={{ 
          flexBasis: "auto", 
          height: "30px", 
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
        Save and Next
      </Button>
    </Form>
  )
}