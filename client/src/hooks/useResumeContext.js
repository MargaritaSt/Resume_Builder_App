import { useState } from 'react';

export default function useResumeContext(props) {

  const [resumeState, setResumeState] = useState({
    summary: {
      body: ''
    },
    core_competencies: {
      body: ''
    },
    achievements: {
      body: ''
    },
    educations: [
      {
        id:1, 
        institution:'', 
        type_degree:'', 
        graduat_date:'', 
        country:''
      }
    ],
    profile: {
        prof_title: '',
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        address: '',
        city: '',
        province: '',
        postal_code: ''
    },
    experiences: [
      {
      id: 1,
      job_title: '',
      employer_name: '',
      employer_description: '',
      city: '',
      country: '',
      start_date: '',
      end_date: '',
      responsibilities: ''
      }
    ]
  });

  //Validation fields 
  const isResumeCompleted = (props) => {

    for (let key in props.profile) {
      if (props.profile[key] === ''){
        return false
      }
    }

    for (let education of props.educations) { 
      for (let key in education) {
        if (education[key] === '') {
          return false
        }
      }
    }

    for (let experience of props.experiences) { 
      for (let key in experience) {
        if (experience[key] === '') {
          return false
        }
      }
    }

    if (props.summary.body === "" || props.core_competencies.body === "" || props.achievements.body === "") {
      return false
    }
    else {
        return true;
    }
  }

  return {
    resumeState, 
    setResumeState,
    isResumeCompleted
  }
}