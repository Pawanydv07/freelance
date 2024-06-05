import React from 'react';
import '../../css/Home/HomeP11.css';
import newsImage1 from '../../assets/photo2.jpg';
import newsImage2 from '../../assets/photo2.jpg';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Exciting New Course Launches!',
      image: newsImage1,
      link: '#'
    },
    {
      id: 2,
      title: 'Our Platform Reaches 1 Million Users!',
      image: newsImage2,
      link: '#'
    }
  ];

  return (
    <div className="news-section">
      <h2 className="news-section-title">Latest News</h2>
      <div className="news-container">
        {newsItems.map(news => (
          <div key={news.id} className="news-box">
            <div className="news-image-container">
              <img src={news.image} alt={news.title} className="news-image" />
            </div>
            <div className="news-content">
              <h3 className="news-title">{news.title}</h3>
              <a href={news.link} className="news-read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
