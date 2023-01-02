import React from 'react';

import {images} from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
      <img className='image__style' src={images.mylogo} alt="header img"></img>
      <div>

<<<<<<< HEAD
        <h1 className='app__header-h1'>Hi! I'm Reeto Ghosh.</h1>
        <p className= 'subheading'style={{margin: '2rem 0'}}>
          I am a first year student in Waterloo's Honours Mathematics program.
=======
        <h1 className='app__header-h1'>Hi! My Name is Reeto.</h1>
        <p className= 'subheading'style={{margin: '2rem 0'}}>
          I am a first year student in Waterloos Honours Mathematics program.
>>>>>>> d059be558a262729d5e5a66ef84c2a8797547c9f
        </p>

        <div className='button__links'>
            <form action="https://github.com/Reeto29" target="_blank"> 
              <button className='buttonImage' type="submit">
                <img className="image__styling" src={images.github} alt="GitHub"/>
              </button> 
            </form> 

            <form action="https://www.instagram.com/ldh_codeclub/" target="_blank"> 
            <button className='buttonImage' type="submit">
                <img className="image__styling" src={images.instagram} alt="Instagram"/>
              </button> 
            </form> 

            <form action="https://www.linkedin.com/in/reetoghosh/" target="_blank"> 
            <button className='buttonImage' type="submit">
                <img className="image__styling" src={images.linkedin} alt="Linkedin"/>
              </button> 
          </form> 
        </div>
      </div>

  </div>
  
);

export default Header;
