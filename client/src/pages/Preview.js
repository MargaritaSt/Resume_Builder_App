import React from "react";
import profTitle from '../helpers/pdfResume';

export default function Preview (props) {
    const resumeObj = props.resumeState;
    const newPhone = `(${props.resumeState.profile.phone_number.slice(0,3)})-${props.resumeState.profile.phone_number.substr(3,3)}-${props.resumeState.profile.phone_number.slice(6)}`;
    const prof_title = profTitle(props.resumeState.profile.prof_title)
    const educationArray = resumeObj.educations;
    const experienceArray = resumeObj.experiences;
    
    const styles = {
      page: {
        display: "flex", 
        textAlign: 'left',
        flexDirection: 'column',
        width: "100%",
        padding: "20px",
        position: "absolute",
        boxSizing: "border-box"
      },

    //Profile
      headercontainer: {
        boxSizing: "border-box",
        wordWrap: "break-word",
        overflowWrap: "break-word",
        flexFlow: "row wrap",
        borderWidth: "5",
        borderColor: '#ffccb3',
        borderStyle: 'solid',
      },
      headercontainer_address: {
        display: "flex",
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#ffccb3',
        borderBottomStyle: 'solid',
        padding: "20px 20px 0px"
      },
      headerdetailColumn: {
        display: "flex",
        flexDirection: 'column',
        textTransform: 'uppercase',
        justifyContent: "flex-end"
      },
    
      headerdetailRow: {
        display: "flex",
        flexDirection: 'row',
      },
      headertitle_row: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        padding: "1px",
        textTransform: 'uppercase'
      },
      headerlinkColumn: {
        display: "flex",
        flexDirection: 'column',
        flexGrow: 2,
        alignItems: 'flex-end'
      },
      headerfirstname: {
        fontSize: 30,
      },
    
      headertitle: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: 'center',
        color: "red",
      },
    
      headertitle_black: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: "bold",
        color: "black",
        marginLeft: "5px"
      },
    
      headerlastname: {
        fontSize: 30,
        color: "red",
        marginLeft: "5px"
      },
      headersubtitle: {
        fontSize: 10,
        justifySelf: 'flex-end',
      },
      headerlink: {
        fontSize: 12,
        color: 'black',
        textDecoration: 'none',
        alignSelf: 'flex-end',
        justifySelf: 'flex-end',
        textTransform: 'capitalize'
    
      },
      headerlinkcode: {
        fontSize: 12,
        color: 'black',
        textDecoration: 'none',
        alignSelf: 'flex-end',
        justifySelf: 'flex-end',
        textTransform: 'uppercase'
    
      },
      headeraddress: {
        fontSize: 12,
        color: 'red',
        textDecoration: 'none',
        alignSelf: 'flex-end',
        justifySelf: 'flex-end',
        textTransform: 'capitalize'
      },
      headeremail: {
        fontSize: 12,
        color: 'red',
        textDecoration: 'none',
        alignSelf: 'flex-end',
        justifySelf: 'flex-end',
        textTransform: 'lowercase'
      },
      //End of Profile

      subheadercontainer: {
        display: "flex",
        flexDirection: "row",
        borderWidth: "5",
        borderColor: '#ffccb3',
        borderStyle: 'solid',
        borderTop: "none"
      },

      //Summary of Qualification
      summarysubcontainer: {
        display: "flex",
        flexDirection: 'column',
        padding: "5px",
        width: "60%",
        borderRightWidth: "5",
        borderRightColor: '#ffccb3',
        borderRightStyle: 'solid',
      },  

      titleRow: {
        display: "flex",
        flexDirection: "row",
        fontSize: 12,
        marginBottom: "3px",
        fontWeight: "bold",
        textTransform: 'uppercase'
      },
      text: {
        fontSize: 8,
        whiteSpace: "pre-line",
      },
      titleRed: {
        color:"red",
        fontWeight: "bold",
        marginLeft: "5px"
      },

      //Core Competencies
      competenciessubcontainer: {
        display: "flex",
        flexDirection: 'column',
        padding: "5px",
        width: "40%"
      },  
      sectioncontainer: {
        display: "flex",
        flexDirection: 'column',
        padding: "5px"
      },  
      //Experience
      experiencetitleRow: {
        display: "flex",
        flexDirection: "row",
        fontWeight: "bold",
        fontSize: 9,
        textTransform: 'capitalize'
      },
      titledetails: { 
        textTransform: "capitalize", 
        fontWeight: "normal", 
        marginLeft: "3px",
        fontFamily: "Lato"
      }
    };

    const EducationEntry = ({ educationArray }) => (
      educationArray.map((education, index) => (
    <div key={index} style={styles.experiencetitleRow}>
    <div>{education.type_degree}</div>
    <div style={styles.titledetails}>{education.institution},</div>
    <div style={styles.titledetails}>{education.country}</div>
    <div style={styles.titledetails}>{education.graduat_date}</div>
    </div>))
    );

    const ExperienceEntry = ({ experienceArray }) => (
      experienceArray.map((experience, index) => (
        <div key={index}>
          <div style={styles.experiencetitleRow}>
            <div >{experience.job_title} • </div>
            <div style={styles.titledetails}>{experience.employer_name} • </div>
            <div style={styles.titledetails}>{experience.city} , </div>
            <div style={styles.titledetails}>{experience.country} • </div>
            <div style={styles.titledetails}>{experience.start_date} -</div>
            <div style={styles.titledetails}>{experience.end_date}</div> 
          </div>
          <div style={styles.text}>{experience.employer_description}</div> 
          <div style={{fontWeight: "bold", marginRight: "3px", fontSize: 9, fontStyle: "italic"}}>Responsibilities:</div>
          <div style={styles.text}>{experience.responsibilities}</div> 
        </div>
      ))
    );

const MyDocument = () => (
  <div size="A4" style={styles.page}>
    <div style={styles.headercontainer}>
      <div style={styles.headercontainer_address}>    
        <div style={styles.headerdetailColumn}>
          <div style={styles.headerdetailRow}>
            <div style={styles.headerfirstname}>{resumeObj.profile.first_name}</div>
            <div style={styles.headerlastname}>{resumeObj.profile.last_name}</div>
          </div>
        </div>
  
        <div style={styles.headerlinkColumn}>
          <div style={styles.headerdetailRow}>
            <div style={styles.headeraddress}>{resumeObj.profile.address}, </div>
            <div style={styles.headerlink}>{resumeObj.profile.city}, </div>
            <div style={styles.headerlink}>{resumeObj.profile.province}, </div>
            <div style={styles.headerlinkcode}>{resumeObj.profile.postal_code}</div>
          </div>
          <div style={styles.headerdetailRow}>
            <div style={styles.headerlink}>{newPhone},  </div>
            <div style={styles.headeremail}>{resumeObj.profile.email}</div>
          </div>
        </div>
      </div>
      <div style={styles.headertitle_row}>
        <div style={styles.headertitle}>{prof_title[0]}</div>   
        <div style={styles.headertitle_black}>{prof_title[1]}</div>  
      </div>
    </div>
    <div style={styles.subheadercontainer}> 
        <div style={styles.summarysubcontainer}>
          <div style={styles.titleRow}>
            <div>Summary of </div>
            <div style={styles.titleRed}>Qualification</div>
          </div>
          <div style={styles.text}>{resumeObj.summary.body}</div>
        </div>
        <div style={styles.competenciessubcontainer}>
          <div style={styles.titleRow}>
            <div>Core </div>
            <div style={styles.titleRed}>Competencies</div>
          </div>
          <div style={styles.text}>{props.resumeState.core_competencies.body}</div>
        </div>
    </div>
    <div style={styles.subheadercontainer}>
      <div style={styles.sectioncontainer}>
        <div style={styles.titleRow}>
          <div style={{color:"red"}}>Achievements</div>
        </div>
        <div style={styles.text}>{props.resumeState.achievements.body}</div> 
      </div>
    </div>
    <div style={styles.subheadercontainer}>
      <div style={styles.sectioncontainer}>
        <div style={styles.titleRow}>
        <div>Professional </div>
            <div style={styles.titleRed}>Experience</div>
        </div>
        <ExperienceEntry experienceArray={experienceArray}/>
      </div>
    </div>
    <div style={styles.subheadercontainer}>
      <div style={styles.sectioncontainer}>
        <div style={styles.titleRow}>
        <div>Education & </div>
            <div style={styles.titleRed}>Qualifications</div>
        </div>
        <EducationEntry educationArray={educationArray}/>
      </div>
    </div>
  </div>
)
      return(
        <form style={{width: "50%"}}>
            <div>
            <MyDocument/>
            </div>
        </form>
    );
}