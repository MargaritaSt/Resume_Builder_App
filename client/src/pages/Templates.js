import  React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./style.css";

import Template1 from '../img/Template1.jpg';
import Template2 from '../img/Template2.jpg';
import Template3 from '../img/Template3.jpg';
import Template4 from '../img/Template4.jpg';
import Template5 from '../img/Template5.jpg';

export default function Templates(props) {


  const [index, setIndex] = useState(0);
  

  const pictures = [{
    photo: Template1,
    text:"Entry Level Resume Template"
},
{
    photo: Template2,
    text:"Middle Level Resume Template"
},
{
  photo: Template3,
  text:"Middle Level Resume Template"
},
{
  photo: Template4,
  text:"Senior and Executive Level Resume Template"
},
{
  photo: Template5,
  text:"Senior and Executive Level Resume Template"
}
]
  return (
    <header>
      <main className="container flex flex-column items-center justify-center signup">
        <form style={{ display: 'flex', flexDirection: 'column' ,border: "60px solid #fff", alignItems: 'center', justifyContent: "space-between" }}>
          <div className="flex flex-column justify-center items-center">
            <h1 >Here are your templates</h1><br/>
            <h2>Pick one that suits your work experience.</h2><br/>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: "center"}}>
          <div style={{ fontSize: "50px" }}onClick={()=>{if(index > 0) setIndex(index - 1); else setIndex(4)}}>{" < "}</div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: "center"}}>
          <img
                style={{maxWidth: '50vw', maxHeight: '50vh'}}
                alt="test"
                src={pictures[index].photo}
              />
          <span>{pictures[index].text}</span>
          </div>
          <div style={{ fontSize: "50px" }}onClick={()=>{if(index < pictures.length - 1) setIndex(index + 1); else setIndex(0)}}>{" > "}</div>
          </div>
          <div className="create_resume">
          <Link to="/resume"><button  type="button">Create Your Resume</button></Link>
          </div>
        </form>
      </main>
    </header>
  );
}