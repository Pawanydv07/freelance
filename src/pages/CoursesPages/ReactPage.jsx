import React from 'react';
import JavaScriptImage from '../../assets/javascript.jpg'; // Replace with actual image paths
import ReactImage from '../../assets/react.jpg';
import HtmlImage from '../../assets/HTML.jpg';
import PythonImage from '../../assets/python.jpg';
import NodeJsImage from '../../assets/nodejs.jpeg';
import JavaImage from '../../assets/java.jpg';
import { useNavigate } from 'react-router-dom';
import ReactCard from './ReactCard';
import BgVideo from '../../assets/bgimg.mp4'
import '../../css/reactCard.css'
const ReactPage = () => {
  const videos = [
    {
      id:1,
      videoSrc: BgVideo,
      title: 'Setup ',
      category: 'Make sure you have a recent version of Node.js installed.',
      author: 'Jane Doe',
      views: '2M',
      date: '2 months ago',
    },
    {
      id:2,
      videoSrc: BgVideo,
      title: 'Create React App',
      category: 'create-react-app will set up everything you need to run a React application.',
      author: 'Jane Doe',
      views: '1.5M',
      date: '2 months ago',
    },
    {
      id:3,
      videoSrc: BgVideo,
      title: 'Run the React Application',
      category: 'Run this command to move to the my-react-app directory',
      author: 'Jane Doe',
      views: '1.2M',
      date: '2 months ago',
    },
    {
      id:4,
      videoSrc: BgVideo,
      title: 'Hello, world',
      category: 'It displays a heading saying “Hello, world!” on the page.',
      author: 'Jane Doe',
      views: '1.2M',
      date: '2 months ago',
    },

    {
      id:5,
      videoSrc: BgVideo,
      title: 'Folder Structure',
      category: 'This structure is characterized by its simplicity - grouping files by their type',
      author: 'Jane Doe',
      views: '1.2M',
      date: '2 months ago',
    },

    {
      id:6,
      videoSrc: BgVideo,
      title: 'What Is React?',
      category: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces.',
      author: 'Jane Doe',
      views: '1.2M',
      date: '2 months ago',
    },
    {
      id:6,
      videoSrc: BgVideo,
      title: 'Components',
      category: 'Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML',
      author: 'Jane Doe',
      views: '1.2M',
      date: '2 months ago',
    },
     {
      id:7,
      videoSrc: BgVideo,
      title: 'Functional Components',
      category: 'Functional Component is one way to create components in a React Application. React.js Functional Components helps to create UI components in a Functional and more concise way',
      author: 'Jane Doe',
      views: '1.2M',
      date: '2 months ago',
    }, 
    {
      id:8,
      videoSrc: BgVideo,
      title: 'Class Components',
      category: 'Before React 16.8, Class components were the only way to track state and lifecycle on a React component. Function components were considered "state-less".',
      author: 'Jane Doe',
      views: '1.2M',
      date: '2 months ago',
    }, 
    {
      id:9,
      videoSrc: BgVideo,
      title: 'Hooks Update',
      category: 'Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.',
      author: 'Jane Doe',
      views: '1.2M',
      date: '2 months ago',
    },
    {
      id:10,
      videoSrc: BgVideo,
      title: 'JSX',
      category: 'It is called JSX, and it is a syntax extension to JavaScript',
      author: 'Jane Doe',
      views: '1.2M',
      date: '2 months ago',
    }, 
     {
      id:11,
      videoSrc: BgVideo,
      title: 'Props',
      category: 'React Props are like function arguments in JavaScript and attributes in HTML.To send props into a component, use the same syntax as HTML attributes',
      author: 'Jane Doe',
      views: '1.2M',
      date: '2 months ago',
    }, 
     {
      id:12,
      videoSrc: BgVideo,
      title: 'State ',
      category: 'The state is a built-in React object that is used to contain data or information about the component',
      author: 'Jane Doe',
      views: '1.2M',
      date: '2 months ago',
    },
    {
      id:13,
      videoSrc: BgVideo,
      title: 'SetState',
      category: 'setState is an asynchronous call means if a synchronous call gets called it may not get updated at the right time like to know the current value of an object after an update using setState it may not give the current updated value on the console.',
      author: 'Jane Doe',
      views: '2M',
      date: '2 months ago',
    },
    {
      id:14,
      videoSrc: BgVideo,
      title: 'Destructuring props and state',
      category: 'Destructuring is a simple property that is used to make code much clear and readable, mainly when we pass props in React.',
      author: 'Jane Doe',
      views: '2M',
      date: '2 months ago',
    },
    {
      id:15,
      videoSrc: BgVideo,
      title: 'Event Handling',
      category: 'Events are signals fired inside the browser window that notify of changes in the browser or operating system environment. Programmers can create event handler code that will run when an event fires, allowing web pages to respond appropriately to change',
      author: 'Jane Doe',
      views: '2M',
      date: '2 months ago',
    },
    {
      id:16,
      videoSrc: BgVideo,
      title: 'Binding Event Handlers',
      category: 'In ReactJS, we need to bind events so that the this keyword would not return an “undefined“. In this article, we are going to see the different ways in which we can bind event handlers in ReactJS.',
      author: 'Jane Doe',
      views: '2M',
      date: '2 months ago',
    },
    {
      id:17,
      videoSrc: BgVideo,
      title: 'Methods as props',
      category: 'Make sure you have a recent version of Node.js installed.',
      author: 'Jane Doe',
      views: '2M',
      date: '2 months ago',
    },

    {
      id:1,
      videoSrc: BgVideo,
      title: 'Setup ',
      category: 'Make sure you have a recent version of Node.js installed.',
      author: 'Jane Doe',
      views: '2M',
      date: '2 months ago',
    },

    {
      id:1,
      videoSrc: BgVideo,
      title: 'Setup ',
      category: 'Make sure you have a recent version of Node.js installed.',
      author: 'Jane Doe',
      views: '2M',
      date: '2 months ago',
    },
    {
      id:1,
      videoSrc: BgVideo,
      title: 'Setup ',
      category: 'Make sure you have a recent version of Node.js installed.',
      author: 'Jane Doe',
      views: '2M',
      date: '2 months ago',
    },
    {
      id:1,
      videoSrc: BgVideo,
      title: 'Setup ',
      category: 'Make sure you have a recent version of Node.js installed.',
      author: 'Jane Doe',
      views: '2M',
      date: '2 months ago',
    },

    // Add more video data here
  ];
  

  return (
    
    <div className="min-h-screen bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Welcome to React js Tutorial</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video, index) => (
        <ReactCard key={index} {...video} />
      ))}
    </div>

      </div>
    </div>
  );
};

export default ReactPage;
