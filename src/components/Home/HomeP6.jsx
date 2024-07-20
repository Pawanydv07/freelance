import React from 'react';
import '../../css/Home/HomeP6.css'; // Import the CSS file for styling
import photo1 from '../../assets/photo1.jpg';
import photo2 from '../../assets/photo2.jpg';
import default2 from '../../assets/photo1.jpg';
import hover2 from '../../assets/photo2.jpg';
import backgroundImage from '../../assets/back1.jpg'; // Import the background image

const HoverImageComponent = () => {
  const projects = [
    { id: 1, title: 'Project 1', defaultImage: photo1, hoverImage: photo2 },
    { id: 2, title: 'Project 2', defaultImage: default2, hoverImage: hover2 },
  ];

  return (
    <div className="component-container w-full" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hover-image-container">
        <div className="description-container">
          <h2 className="sub-heading">Explore Our Portfolio</h2>
          <p className="description">Explore our diverse range of projects that showcase our expertise and innovation. Hover over each image to see the transformation and discover more about what we do.</p>
          <button className="book-class-button">Book Class</button>
        </div>
        <div className="image-boxes-container">
          {projects.map((project) => (
            <div key={project.id} className="image-box">
              <img
                src={project.defaultImage}
                alt={project.title}
                className="default-image"
              />
              <img
                src={project.hoverImage}
                alt={project.title}
                className="hover-image"
              />
              <div className="project-title">{project.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverImageComponent;
