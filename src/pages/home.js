import React, {useContext} from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { PersonContext } from '../App';

function Home() {
  const person = useContext(PersonContext);

  return (
    <div className="Home">
      <h1>Hello, I'm Berkay Akyazı</h1>
      <h2>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</h2>
      <div className="socialMedia">
        <div className="socialMedia-link"><a href={person.socialMedia && person.socialMedia.twitter}><FaTwitter style={{width:'100%', height:'100%'}}/></a></div>
        <div className="socialMedia-link"><a href={person.socialMedia && person.socialMedia.github}><FaGithub style={{width:'100%', height:'100%'}}/></a></div>
        <div className="socialMedia-link"><a href={person.socialMedia && person.socialMedia.linkedin}><FaLinkedin style={{width:'100%', height:'100%'}} /></a></div>
        <div className="socialMedia-link"><a href={person.socialMedia && person.socialMedia.instagram}><FaInstagram style={{width:'100%', height:'100%'}}/></a></div>
      </div>
    </div>
  );
}

export default Home;
