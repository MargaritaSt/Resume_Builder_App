import React from 'react';
export default function Guidelines(props) {
  return (
<header>
      <main className="container flex flex-column items-center justify-center signup">
        <form style={{ border: "60px solid #fff", justifyContent: "space-between", height: "100%", width: "100%"}}>
          <h1 >How To Write An Impressive Resume</h1>
          <p>Having a perfectly honed and well-written resume is like having a superpower during your job search.
            While most people walk up the hiring ladder, you put on your crimson cape and soar upwards at supersonic speed.
            This how to write a resume guide outlines the most important building blocks for creating exactly this type of amazing resume.
          </p>
          <h2 className="text">Top 10 Resume Facts You Need to Know</h2>
          <p>As you write your resume, keep your audience–as well as our top 10 facts–in mind:
            <ol className="content" style={{width: "100%"}}>
              <li class="loaded">"Recruiters spend an average of only about" <b>6 seconds</b> "on each resume before making a decision for interview call."</li>
              <li class="loaded">The first 15-20 words of your resume are critical as that is the maximum words a person can read on average in those <b>6 seconds.</b></li>
              <li class="loaded">The top one-third of your resume often determines whether a hiring manager chooses to keep reading.</li>
              <li class="loaded">Your personal summary is the section of your resume a recruiter is most likely to read.</li>
              <li class="loaded">Many employers use applicant tracking systems (ATS) to scan resumes for specific terms. ATS search terms are usually correlated to job descriptions.</li>
              <li class="loaded">A recent survey found that 54 percent of jobseekers do not customize their resumes for each job, so tailoring yours could put you ahead of more than half your competition.</li>
              <li class="loaded">Changing the wording of a keyword from the job description even slightly – for example, from “project management” to “project manager” – could cause the ATS to eliminate you.</li>
            </ol>
          </p>
        </form>
      </main>
    </header>
  );
}