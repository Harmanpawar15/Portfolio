import React from 'react'
import { BsTwitter } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
    <div className="app__social">
      <div>
      <a href="https://github.com/Harmanpawar15" target="_blank" rel="noopener noreferrer">
        <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://github.com/Harmanpawar15" target="_blank" rel="noopener noreferrer">
        <FaGithub />
        </a>
      </div>

      <div>
        <a href="https://www.linkedin.com/in/harman-pawar/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
        </a>
      </div>
    </div>
  );
  



 
export default SocialMedia