import React, { useContext } from 'react';
import { FaLaptop, FaBook } from 'react-icons/fa';
import ResumeTimeLine from '../components/resume-timeline/resume-timeline';
import { PersonContext } from '../App';

function Resume() {
  const person = useContext(PersonContext);


  return (
    <div className="Resume">
      <h1 className="pageTitle">RESUME</h1>
      {
        person.workExperience && (
          <ResumeTimeLine
            title="Working Experience"
            titleIcon={<FaLaptop style={{ width: "100%", height: "100%" }} />}
            items={
              person.workExperience.map(exp => {
                return {
                  startDate: exp.startDate,
                  endDate: exp.endDate,
                  title: exp.title,
                  location: exp.company,
                  details: exp.description
                }
              })
            }
          />
        )
      }
      {
        person.education && (
          <ResumeTimeLine
            title="Education"
            titleIcon={<FaBook style={{ width: "100%", height: "100%" }} />}
            items={
              person.education && person.education.map(exp => {
                return {
                  startDate: exp.startDate,
                  endDate: exp.endDate,
                  title: exp.department,
                  location: exp.university,
                  details: exp.description
                }
              })
            }
          />
        )
      }


    </div>
  );
}

export default Resume;
