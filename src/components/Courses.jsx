// src/CoursePage.js
import React from 'react';
import "../css/Courses.css";
import courseImage from '../assets/course.jpeg'; // Ensure you have this image in your src folder

const CoursePage = () => {
    return (
        <div className="course-page">
            <div className="course-header">
                <div className="course-info-left">
                    <img src={courseImage} alt="Course" className="course-image" />
                </div>
                <div className="course-info-right">
                    <h1 className="course-title">Free Course</h1>
                    <div className="course-meta-info">
                        <p className="instructor">Instructor: Onekorse</p>
                        <p className="curriculum">Curriculum: 3 Items</p>
                        <p className="reviews">Reviews: ★★★★☆ (1)</p>
                    </div>
                    <p className="course-price">Free</p>
                    <button className="login-button">Login To Take Course</button>
                </div>
            </div>
            <div className="course-navigation">
                <span className="nav-item active">Curriculum</span>
                <span className="nav-item">About</span>
                <span className="nav-item">Members</span>
                <span className="nav-item">Instructors</span>
                <span className="nav-item">News</span>
            </div>
            <div className="course-content">
                <div className="scrollbar left-scroll">
                    <div className="course-details">
                        <h2>Basics</h2>
                        <ul>
                            <li>
                                <span>Placerat Odio Eu</span>
                                <span className="duration">Duration: 10 Hrs</span>
                            </li>
                            <li>
                                <span>Fusce Auctor Consectetur</span>
                                <span className="duration">Duration: 2 Hrs</span>
                            </li>
                            <li>
                                <span>Art</span>
                                <span className="duration">Duration: 0 Hrs 45 Mins</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="scrollbar right-scroll">
                    <div className="course-info-details">
                        <h2>Course Info</h2>
                        <p>Categories: Fashion</p>
                        <p>Lessons: 1</p>
                        <p>Quizzes: 1</p>
                        <p>Assignments: 1</p>
                        <p>Duration: 12 Hrs 45 Mins</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursePage;
