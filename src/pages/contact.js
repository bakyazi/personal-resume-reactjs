import React, { useContext } from 'react';
import { FaLinkedin, FaMailBulk, FaTelegram } from 'react-icons/fa';
import {PersonContext} from '../App';
function Contact() {
  const person = useContext(PersonContext);
  return (
    <div className="Contact">
      <h1 className="pageTitle">Contact</h1>
      <div className="contact-section">
        <div className="contact-form">
          <div className="contact-form-field">
            <label>Your Name</label>
            <input type="text" name="name" id="contact-form-name"></input>
          </div>
          <div className="contact-form-field">
            <label>Your E-mail</label>
            <input type="text" name="name" id="contact-form-name"></input>
          </div>
          <div className="contact-form-field">
            <label>Subject</label>
            <input type="text" name="name" id="contact-form-name"></input>
          </div>
          <div className="contact-form-field">
            <label>Message</label>
            <textarea name="message" id="contact-form-message" cols="30" rows="8"></textarea>
          </div>
          <button className="btn-primary" onClick={() => {alert("Not implemented yet!")}}>Send Message</button>
        </div>
        <div className="contact-info-cards">
          <div className="contact-info-card">
            <div className="infoIcon">
              <FaMailBulk style={{width:'60%', height:'60%'}}></FaMailBulk>
            </div>
            <div className="contact-info-card-content">
              <div className="header">
                  Mail
              </div>
              <div className="content">
              <a href={`mailto:${person.email}`}>{person.email}</a>
              </div>
            </div>
          </div>
          <div className="contact-info-card">
          <div className="infoIcon">
              <FaTelegram style={{width:'60%', height:'60%'}} />
            </div>
            <div className="contact-info-card-content">
              <div className="header">
                  Telegram
              </div>
              <div className="content">
                  {person.socialMedia && <a href={person.socialMedia.telegram}>@{person.socialMedia.telegram.split('/').slice(-1)[0]}</a>}
              </div>
            </div>

            </div>
            <div className="contact-info-card">
            <div className="infoIcon">
              <FaLinkedin style={{width:'60%', height:'60%'}} />
            </div>
            <div className="contact-info-card-content">
              <div className="header">
                  LinkedIn
              </div>
              <div className="content">
              {person.socialMedia && <a href={person.socialMedia.linkedin}>{person.fullName}</a>}
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
