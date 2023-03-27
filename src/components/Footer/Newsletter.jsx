import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Get in touch with us" />
      <h4 className="headtext__cormorant">Contact us </h4>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="text" placeholder="What's your good name?"/>
      <input type="email" placeholder="Enter your email address" />
      <input type="text" placeholder='What would you like to bring to our attention?'/>
      <input type="text" placeholder='Share details about'/>
      <button type="button" className="custom__button">Transmit message</button>
    </div>
  </div>
);

export default Newsletter;
