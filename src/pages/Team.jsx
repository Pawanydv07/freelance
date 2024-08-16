import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import manImage from '../assets/man.jpg'; // Adjust the path if necessary
import '../css/Pages/team.module.css';

const teamMembers = [
  {
    name: 'Montel Alekender',
    title: 'CEO',
    image: manImage,
    socials: {
      twitter: '#',
      linkedin: '#',
      instagram: '#',
      facebook: '#',
    },
  },
  {
    name: 'Montel Alekender',
    title: 'Developer',
    image: manImage,
    socials: {
      twitter: '#',
      linkedin: '#',
      instagram: '#',
      facebook: '#',
    },
  },
  {
    name: 'Montel Alekender',
    title: 'Aptitute',
    image: manImage,
    socials: {
      twitter: '#',
      linkedin: '#',
      instagram: '#',
      facebook: '#',
    },
  },
  {
    name: 'Montel Alekender',
    title: 'Design',
    image: manImage,
    socials: {
      twitter: '#',
      linkedin: '#',
      instagram: '#',
      facebook: '#',
    },
  },
  {
    name: 'Liliana Moore',
    title: 'Machine Learning',
    image: manImage,
    socials: {
      twitter: '#',
      linkedin: '#',
      instagram: '#',
      facebook: '#',
    },
  },
  {
    name: 'Qaniel Burnside',
    title: 'Artifical Intelligence',
    image: manImage,
    socials: {
      twitter: '#',
      linkedin: '#',
      instagram: '#',
      facebook: '#',
    },
  },
  {
    name: 'Qaniel Burnside',
    title: 'Programming Aptitute',
    image: manImage,
    socials: {
      twitter: '#',
      linkedin: '#',
      instagram: '#',
      facebook: '#',
    },
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-pink-100 p-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-green-600">TEAM UI DESIGN</h2>
      </div>
      <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-center mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.title}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.socials.twitter} className="text-blue-500 hover:text-blue-700">
                  <FaTwitter size={20} />
                </a>
                <a href={member.socials.linkedin} className="text-blue-700 hover:text-blue-900">
                  <FaLinkedin size={20} />
                </a>
                <a href={member.socials.instagram} className="text-pink-500 hover:text-pink-700">
                  <FaInstagram size={20} />
                </a>
                <a href={member.socials.facebook} className="text-blue-600 hover:text-blue-800">
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
