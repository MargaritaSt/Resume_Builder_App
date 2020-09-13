import React from "react";
import { Document, Page, Text, View, StyleSheet, PDFViewer, Font } from "@react-pdf/renderer";
import profTitle from '../helpers/pdfResume';

import LatoBold from "./fonts/Lato/Lato-Bold.ttf";
import LatoItalic from "./fonts/Lato/Lato-Italic.ttf";
import LatoRegular from "./fonts/Lato/Lato-Regular.ttf";
import LatoLight from "./fonts/Lato/Lato-Light.ttf";
import LatoBoldItalic from "./fonts/Lato/Lato-BoldItalic.ttf";
import OpenSansRegular from "./fonts/Open_Sans/OpenSans-Regular.ttf";
import RobotoRegular from "./fonts/Roboto/Roboto-Regular.ttf";

export default function PdfMaker (props) {
const resumeObj = props.resumeState;
const newPhone = `(${props.resumeState.profile.phone_number.slice(0,3)})-${props.resumeState.profile.phone_number.substr(3,3)}-${props.resumeState.profile.phone_number.slice(6)}`;
const prof_title = profTitle(props.resumeState.profile.prof_title)

  const styles = StyleSheet.create ({
    //Profile
    headercontainer_address: {
      flexDirection: 'row',
      borderBottomWidth: 0.5,
      borderBottomColor: '#ffccb3',
      borderBottomStyle: 'solid',
      alignItems: 'stretch'
    },
    headercontainer: {
      flexDirection: 'column',
      alignItems: 'stretch'
    },
    headerlinkColumn: {
      flexDirection: 'column',
      flexGrow: 3,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      fontFamily: 'Lato Italic'
    },
    headerdetailColumn: {
      flexDirection: 'column',
      flexGrow: 9,
      textTransform: 'uppercase'
    },
    headerdetailRow: {
      flexDirection: 'row',
      flexGrow: 9
    },
    headername: {
      fontSize: 24,
      fontFamily: 'Roboto Regular'
    },
    headertitle_row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: "center",
      padding: "1px",
      textTransform: 'uppercase'
    },
    headertitle: {
      textAlign: "justify",
      display: 'flex',
      fontSize: 14,
      fontFamily: 'Lato Bold',
      color: "red"
    },
    headersubtitle: {
      fontSize: 10,
      justifySelf: 'flex-end',
      fontFamily: 'Lato'
    },
    headerlink: {
      fontSize: 8,
      color: 'black',
      textDecoration: 'none',
      alignSelf: 'flex-end',
      justifySelf: 'flex-end'
    },
    //Experience
    exptitle: {
      fontSize: 11
    },
    expRow: {
      fontFamily: 'Lato',
      flexDirection: 'row',
      fontSize: 11
    },
    responsRow: {
      fontFamily: 'Lato',
      flexDirection: 'row',
      fontSize: 11,
      margin: 0
    },
    //Skills and Qualification
    skillsmaincontainer: {
      flexDirection: 'row',
      borderBottomWidth: 3,
      borderColor: '#ffccb3',
      padding: 0,
      width: 531
    },
    skillsrightcontainer: {
      flexDirection: 'column',
      alignItems: 'stretch',
      padding: 10,
      width: 231
    },
    skillsleftcontainer: {
      flexDirection: 'column',
      borderRightWidth: 3,
      borderRightColor: '#ffccb3',
      alignItems: 'stretch',
      padding: 10,
      width: 300
    },
    skillstext: {
      fontFamily: 'Roboto Regular',
      fontSize: 10,
      marginBottom: 10,
    },
    skillsdescrip: {
      fontFamily: 'Roboto Regular',
      fontSize: 10,
      marginBottom: 5
    },
   
    text: {
      fontFamily: 'Lato',
      fontSize: 11
    },
    skillstitleRow: {
      fontFamily: 'Lato Bold',
      flexDirection: 'row',
      fontSize: 12,
      marginBottom: 10,
      textTransform: "uppercase"
    },
    skillstitleRed: {
      color:"red"
    },
    //Achievements
    rowcontainer: {
      flexDirection: 'column',
      borderRightWidth: 3,
      borderRightColor: '#ffccb3',
      alignItems: 'stretch',
      padding: 10,
      width: 532
    },
    //page
    pdfbody: {
        width: 800,
        height: 1015
    },
    page: {
      padding: 30,
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      '@media max-width: 400': {
        flexDirection: 'column',
      },
      borderWidth: 3,
      borderColor: '#ffccb3',
    },
    image: {
      marginBottom: 10,
    },
    leftColumn: {
      flexDirection: 'column',
      paddingTop: 0,
      paddingRight: 0,
      '@media max-width: 400': {
        width: '100%',
        paddingRight: 0,
      },
      '@media orientation: landscape': {
        width: 200,
      }
    },
    rightColumn: {
      flexDirection: 'column',
      width: 230,
      paddingTop: 0,
      paddingRight: 0,
      '@media max-width: 400': {
        width: '100%',
        paddingRight: 0,
      },
      '@media orientation: landscape': {
        width: 200,
      },
    },
  });
  Font.register( {
    family: 'Open Sans',
    src: OpenSansRegular
  });
  Font.register( {
    family: 'Lato',
    src: LatoRegular,
  });
  Font.register( {
    family: 'Lato Light',
    src: LatoLight,
  });
  Font.register( {
    family: 'Lato Italic',
    src: LatoItalic,
  });
  Font.register( {
    family: 'Lato Bold',
    src: LatoBold,
  });
  Font.register( {
    family: 'Lato BoldItalic',
    src: LatoBoldItalic,
  });
  
  Font.register( {
    family: 'Roboto Regular',
    src: RobotoRegular,
  });
   
  const Profile = () => (
    <View style={styles.headercontainer}>
      <View style={styles.headercontainer_address}>
        <View style={styles.headerdetailColumn}>
          <View style={styles.headerdetailRow}>
            <Text style={styles.headername}>{resumeObj.profile.first_name} </Text>
            <Text style={[styles.headername, {color: "red"}]}>{resumeObj.profile.last_name}</Text>
          </View>
        </View>
        <View style={styles.headerlinkColumn}>
          <View style={styles.headerdetailRow}>
            <Text style={[styles.headerlink, {color: 'red'}]}>{resumeObj.profile.address}, </Text>
            <Text style={styles.headerlink}>{resumeObj.profile.city}, </Text>
            <Text style={styles.headerlink}>{resumeObj.profile.province}, </Text>
            <Text style={styles.headerlink}>{resumeObj.profile.postal_code}</Text>
          </View>
          <View style={styles.headerdetailRow}>
            <Text style={styles.headerlink}>{newPhone}, </Text>
            <Text style={[styles.headerlink, {color: 'red'}]}>{resumeObj.profile.email}</Text>
          </View>
        </View>
      </View>
      <View style={styles.headertitle_row}>
        <Text style={styles.headertitle}>{prof_title[0]}</Text>   
        <Text style={[styles.headertitle, {color: "black",fontFamily: 'Lato Bold', marginLeft: "5px"}]}>{prof_title[1]}</Text>  
      </View>
    </View>
  );
          
  const Summary = () => (
    <View style={styles.skillsmaincontainer}>  
      <View style={styles.skillsleftcontainer}>
        <View style={styles.skillstitleRow}>
          <Text>Summary of </Text>
          <Text style={styles.skillstitleRed}>Qualification</Text>
        </View>
          <Text style={styles.skillstext}>{resumeObj.summary.body}</Text>
        </View>
      <CoreCompetencies/>
    </View>
  );

  const CoreCompetencies = () => (
    <View style={styles.skillsrightcontainer}>
      <View style={styles.skillstitleRow}>
        <Text>Core  </Text>
        <Text style={styles.skillstitleRed}>Competencies</Text>
      </View>
        <Text style={[styles.skillstext, {whiteSpace: "pre-line"}]}>{props.resumeState.core_competencies.body}</Text>
    </View>
  );
  
  const Achievments = () => (
    <View style={styles.skillsmaincontainer}>  
      <View style={styles.rowcontainer}>
        <View style={styles.skillstitleRow}>
          <Text style={styles.skillstitleRed}>Achievements</Text>
        </View>
          <Text style={styles.skillstext}>{props.resumeState.achievements.body}</Text>
      </View>
    </View>
  );

  const ExperienceEntry = ({ experienceArray }) => (
    experienceArray.map((experience, index) => (
      <View key={index}>
      <View style={styles.expRow}>
        <Text style={{fontFamily: "Lato Bold"}}>{experience.job_title} • </Text>
        <Text style={[styles.text, {fontFamily: "Lato"}]}>{experience.employer_name} • </Text>
        <Text style={[styles.text, {fontFamily: "Lato"}]}>{experience.city} • </Text>
        <Text style={[styles.text, {fontFamily: "Lato"}]}>{experience.start_date} - </Text>
        <Text style={[styles.text, {fontFamily: "Lato"}]}>{experience.end_date}</Text>
      </View>
          <Text style={styles.skillsdescrip}>{experience.employer_description}</Text>
          <Text style={[styles.exptitle, {fontFamily: "Lato BoldItalic"}]}>Responsibilities:</Text>
         
          <Text style={styles.skillstext}>{experience.responsibilities}</Text>
          
      </View>
    ))
  );

  const Experience = () => (
    <View style={styles.skillsmaincontainer}>   
      <View style={styles.rowcontainer}>
        <View style={styles.skillstitleRow}>
          <Text >Professional </Text>
          <Text style={styles.skillstitleRed}>Experience</Text>
        </View>
        <ExperienceEntry 
          experienceArray = {resumeObj.experiences}
        />
      </View>
    </View>
  );

  const EducationEntry = ({ educationArray }) => (
    educationArray.map((education, index) => (
    <View key={index} style={[styles.responsRow, {flexWrap: "wrap"}]}>
      <Text style={{fontFamily: "Lato Bold", whiteSpace: "pre-line"}}>{education.type_degree} </Text>
      <Text style={[styles.text, {fontFamily: "Lato", whiteSpace: "pre-line"}]}> • {education.institution} • </Text>
      <Text style={[styles.text, {fontFamily: "Lato"}]}>{education.country} • </Text>
      <Text style={[styles.text, {fontFamily: "Lato"}]}>{education.graduat_date}</Text>
    </View>))
  );

  const Education = () => (
    <View style={styles.rowcontainer}>
      <View style={styles.skillstitleRow}>
        <Text>Education & </Text>
          <Text style={styles.skillstitleRed}>Qualification</Text>
      </View>
      <EducationEntry 
        educationArray = {resumeObj.educations}
      />
    </View>
  );

  const Resume = (props) => (
    <Page {...props} style={styles.page}>
      <Profile/>
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <Summary/>
        </View>  
        <Achievments/>
        <Experience/>
        <Education/>
      </View>
    </Page>
  )

  const Output = () => (
    <Document>
    <Resume size="A4" />
    </Document>
  );
  
  return (
    <header>
      <main className="container flex flex-column items-center justify-center signup">
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: "center"}}>
          <PDFViewer style={styles.pdfbody}><Output /></PDFViewer>
        </div>
      </main>
    </header>
  );
}