import React, { useContext } from 'react';
import {PersonContext} from '../App';
function About({props, context}) {

  const person = useContext(PersonContext);
  return (
    <div className="About">
      <h1 className="pageTitle anim-typewriter" id="parent">ABOUT ME<div id="border"></div></h1>
      <div className="a_section">
        <div className="a_picture_box">
          <div className="a_picture_container">
            <img className="a_picture" src={person.flatPictureUrl} alt="Avatar" />
          </div>
        </div>
        <div className="a_info">
          <h2>I am <span className="a_color">{person.fullName}</span></h2>
          <span>{person.shortBio}</span>
          <ul>
            <li><b>Full Name</b>{person.fullName}</li>
            <li><b>Age</b>{person.age}</li>
            <li><b>Nationality</b>{person.nationality}</li>
            <li><b>Languages</b>{person.languages && person.languages.join(', ')}</li>
            <li><b>Location</b>{person.location}</li>
          </ul>
          <button className="btn-primary"><a href={person.cvUrl} target='_blank' rel='noopener noreferrer'>Download CV</a></button>
        </div>

      </div>
    </div>
  );
}

export default About;
