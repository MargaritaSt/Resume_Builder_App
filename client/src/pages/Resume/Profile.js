import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

export default function Profile(props) {
  const history = useHistory();

  //Update state when any field changes. The 'id' variable is the key of the item of profile object
  const Change = (event) => { 
    const { id, value } = event.target;
    props.setResumeState(prev => ({...prev, profile: ({...prev.profile, [id]: value })}))
  };

  //Fields validation, if successful to redirect to summary form  
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
    <Form noValidate validated={validated}
      style={{padding:  "25px", flexDirection: "row", width: "40%"}}
      onSubmit={handleSubmit}
    >
      <Form.Row>
          <Form.Group controlId="prof_title">
            <Form.Label>Profile Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Profile Title" required defaultValue ={(props.profileState==null) ? "" : props.profileState.prof_title} onChange={Change}/>
            <Form.Control.Feedback type="invalid">
                  Please provide a profile title.
                </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

      <Form.Row>
          <Form.Group controlId="first_name">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your First Name" required defaultValue ={(props.profileState==null) ? "" : props.profileState.first_name} onChange={Change}/>
            <Form.Control.Feedback type="invalid">
                  Please provide a name.
                </Form.Control.Feedback>
          </Form.Group>
      </Form.Row>

      <Form.Row>
          <Form.Group controlId="last_name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Last Name" required defaultValue ={(props.profileState==null) ? "" : props.profileState.last_name} onChange={Change}/>
            <Form.Control.Feedback type="invalid">
                  Please provide a name.
                </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="e.g abc@gmail.com" required defaultValue ={(props.profileState==null) ? "" : props.profileState.email} onChange={Change}/>
            <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
        </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="phone_number">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="only numbers e.g 2227771990" required defaultValue ={(props.profileState==null) ? "" : props.profileState.phone_number} onChange={Change} />
            <Form.Control.Feedback type="invalid">
                  Please provide a valid phone number.
                </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="e.g 1234 Main St" required defaultValue ={(props.profileState==null) ? "" : props.profileState.address} onChange={Change}/>
          <Form.Control.Feedback type="invalid">
                  Please provide a valid address.
                </Form.Control.Feedback>
        </Form.Group>

        <Form.Row>
          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="e.g  Montreal" required defaultValue ={(props.profileState==null) ? "" : props.profileState.city} onChange={Change} />
            <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="province">
            <Form.Label>Province</Form.Label>
            <Form.Control type="text" placeholder="e.g Quebec" required defaultValue ={(props.profileState==null) ? "" : props.profileState.province} onChange={Change} />
            <Form.Control.Feedback type="invalid">
                  Please provide a valid province.
                </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="postal_code">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control type="text" placeholder="e.g K2J5Y3" required defaultValue ={(props.profileState==null) ? "" : props.profileState.postal_code} onChange={Change} />
            <Form.Control.Feedback type="invalid">
                  Please provide a valid postal code.
                </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Button style={{ flexBasis: "auto", height: "30px", border: "transparent", borderRadius: "20px", textAlign: "center", backgroundImage: "linear-gradient(to right, #bc4e9c, #f80759)", color: "#fff", fontFamily: "Montserrat, sans-serif", fontSize: "1rem", textTransform: "capitalize", cursor: "pointer"}} variant="primary" type="submit">
          Save and Next
        </Button>
    </Form>
  )
}