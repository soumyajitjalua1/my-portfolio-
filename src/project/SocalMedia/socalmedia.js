import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const SocialMediaLinks = () => {
  return (
    <div>
        <h1 style={{textAlign:'center',color: '#29b8ac',padding: '10px',margin:'10px',fontSize: '42px'}}>Find me on</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '33px', paddingBottom: '20px' }}>
            
        <a href="https://www.instagram.com/soumyajit.1234/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={40} color="#E4405F" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61556806895133" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={40} color="#3b5998" />
        </a>
        <a href="https://twitter.com/@Soumyajitjalua" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={40} color="#1DA1F2" />
        </a>
        </div>
    </div>
  );
}

export default SocialMediaLinks;
