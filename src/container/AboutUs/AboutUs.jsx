import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans_1">Imperial Cuisine is a startup restaurant founded by Vipin Goyal, a foodie with a Bachelor of Engineering degree in Computer Science. Our menu offers exquisite dishes made with fresh ingredients and cooked to perfection. We combine traditional techniques with modern innovations to create flavorful and visually stunning dishes. We are committed to quality, innovation, and customer satisfaction, and we look forward to serving you.posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Imperial Cuisine was founded by Vipin Goyal in 2021, with a vision to create a restaurant that offers a unique and memorable dining experience with an emphasis on quality and innovation.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
