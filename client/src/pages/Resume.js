import  React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import "./style.css";
import Profile from './Resume/Profile';
import Summary from './Resume/Summary';
import Competencies from './Resume/Competencies';
import Achievements from './Resume/Achievements';
import QualificationList from './Resume/QualificationList';
import ExperienceList from './Resume/ExperienceList';
import Preview from './Preview';
import Download from './Download';
import getResume from '../helpers/getResume';

const MaybePreview = (props) => {
  const location = useLocation();
  if (location.pathname !== "/download") { return <Preview {...props} /> }
  return null;
};

export default function Resume(props) {
  const { userId, resumeState, setResumeState, isResumeCompleted } = props;

//Pass to the getResume function user_id and check if the user_id exists in resume table. If it does then show resume date from db otherwise setResumeState by default 
 useEffect(() => {
    getResume(userId)
    .then(response => {
      if(response.data.length !== 0) {
       setResumeState(response.data[0].resume_data)
      }  else {
        setResumeState({
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
        })
      }
    })
 },[]);

  const routes = [
    {
      path: "/profile",
      exact: true,
      sidebar: () => <div>Profile</div>,
      main: () => <Profile profileState={resumeState.profile} setResumeState={setResumeState}/>
    },
    {
      path: "/summary",
      sidebar: () => <div>SUMMARY OF QUALIFICATIONS</div>,
      main: () => <Summary summaryState={resumeState.summary} setResumeState={setResumeState}/>
    },
    {
      path: "/competencies",
      sidebar: () => <div>CORE COMPETENCIES</div>,
      main: () => <Competencies competenciesState={resumeState.core_competencies} setResumeState={setResumeState}/>
    },
    {
      path: "/achievement",
      sidebar: () => <div>ACHIEVEMENTS</div>,
      main: () => <Achievements achievementsState={resumeState.achievements} setResumeState={setResumeState}/>
    },
    {
      path: "/experience",
      sidebar: () => <div>PROFIESSIONAL EXPERIENCE</div>,
      main: () => <ExperienceList resumeState={resumeState} setResumeState={setResumeState}/>
    },
    {
      path: "/qualification",
      sidebar: () => <div>EDUCATION AND QUALIFICATIONS</div>,
      main: () => (
        <QualificationList userId = {props.userId} resumeState={resumeState} setResumeState={setResumeState} isResumeCompleted={isResumeCompleted} />
      )
    }
  ];

  return(
    <header>
      <main className="container flex items-start signup">
        <Router>
          <aside className= "resume_nav" >
            <ul>
              <br/>
              <br/>
              <li>
                <Link to="/profile">PROFILE</Link>
              </li>
              <li>
                <Link to="/summary">SUMMARY OF QUALIFICATIONS</Link>
              </li>
              <li>
                <Link to="/competencies">CORE COMPETENCIES</Link>
              </li>
              <li>
                <Link to="/achievement">ACHIEVEMENTS</Link>
              </li><li>
                <Link to="/experience">PROFESSIONAL EXPERIENCE</Link>
              </li><li>
                <Link to="/qualification">EDUCATION AND QUALIFICATIONS</Link>
              </li>
            </ul>
          </aside>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              children={route.main}
            />
          ))}
        </Switch>
        <Switch>
          <Route path="/download">
            <Download userId={userId} resumeState={resumeState}/>
          </Route>
        </Switch>
        <MaybePreview userId={userId} resumeState={resumeState}/>
        </Router>    
      </main>
    </header>
  );
}