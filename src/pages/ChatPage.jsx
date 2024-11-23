import React, { useState, useEffect } from "react";
import { FaSearch, FaPlus, FaEllipsisH, FaMoon, FaSun, FaChevronLeft, FaChevronRight, FaMicrophone, FaFileUpload, FaImage, FaSmile, FaTrophy, FaShareAlt } from "react-icons/fa";

const ChatPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [typing, setTyping] = useState(false);
  const [message, setMessage] = useState("");
  const [isOnline, setIsOnline] = useState(true); // Mock user status
  const [chatHistory, setChatHistory] = useState([
    { sender: "User", message: "How does the model determine token usage?" },
    { sender: "AI", message: "Tokens represent characters, words, or subwords..." }
  ]);
  const [userProfile, setUserProfile] = useState({
    name: "Alex Ferguson",
    avatar: "https://cdn-icons-png.flaticon.com/512/4712/4712086.png"
  });
  const [userStats, setUserStats] = useState({
    messagesSent: 1023,
    achievements: ["Chat Master", "Early Adopter"]
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { sender: "User", message }]);
      setMessage("");
      setTyping(false);
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    if (e.target.value) {
      setTyping(true);
    } else {
      setTyping(false);
    }
  };

  const handleTypingIndicator = () => {
    return typing ? <p className="text-sm text-gray-500">User is typing...</p> : null;
  };

  const handleFileUpload = (e) => {
    alert("File uploaded!");
  };

  const handleVoiceMessage = () => {
    alert("Voice message recorded!");
  };

  const handleEmojiPicker = () => {
    alert("Emoji picker will appear!");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline((prevStatus) => !prevStatus);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-gray-100 via-blue-50 to-white'} mt-20 transition-all`}>
      {/* Left Sidebar */}
      <aside className={`transition-all w-1/4 ${sidebarCollapsed ? 'w-20' : 'w-1/4'} ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} shadow-md border-r`}>
        <div className="p-4 flex items-center justify-between">
          <img
            src={userProfile.avatar}
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div className={`transition-all ${sidebarCollapsed ? 'hidden' : ''}`}>
            <h2 className="font-semibold">{userProfile.name}</h2>
            <p className={`text-sm ${isOnline ? 'text-green-500' : 'text-red-500'}`}>{isOnline ? 'Online' : 'Offline'}</p>
          </div>
          <button onClick={toggleSidebar} className="text-gray-600 hover:text-gray-800 transition-all">
            {sidebarCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
        </div>

        {/* User Stats and Achievements */}
        <div className={`p-4 ${sidebarCollapsed ? 'hidden' : ''}`}>
          <div className="space-y-2">
            <h3 className="font-semibold">Stats</h3>
            <p className="text-sm">Messages Sent: {userStats.messagesSent}</p>
            <h3 className="font-semibold mt-2">Achievements</h3>
            <ul className="space-y-1">
              {userStats.achievements.map((ach, idx) => (
                <li key={idx} className="flex items-center text-sm">
                  <FaTrophy className="text-yellow-400 mr-2" /> {ach}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Search Bar */}
        <div className={`p-4 ${sidebarCollapsed ? 'hidden' : ''}`}>
          <div className="flex items-center bg-gray-100 rounded-md p-2">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search for chats..."
              className="bg-transparent flex-1 ml-2 text-sm outline-none"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className={`p-4 ${sidebarCollapsed ? 'hidden' : ''}`}>
          <ul className="space-y-4">
            <li className="font-medium">
              <button className="w-full text-left">Chats</button>
            </li>
            <li className="font-medium">
              <button className="w-full text-left">Library</button>
            </li>
            <li className="font-medium">
              <button className="w-full text-left">Apps</button>
            </li>
          </ul>
        </div>

        {/* Quick Access & Social Sharing */}
        <div className={`p-4 border-t ${sidebarCollapsed ? 'hidden' : ''}`}>
          <button className="w-full text-left flex items-center space-x-2">
            <FaShareAlt className="text-gray-500" />
            <span className="text-sm">Share this app</span>
          </button>
        </div>
      </aside>

      {/* Main Chat Section */}
      <main className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className={`p-4 shadow-sm flex items-center justify-between ${darkMode ? 'bg-gray-800 text-white' : 'bg-gradient-to-r from-white via-blue-50 to-gray-100'}`}>
          <h1 className="text-lg font-semibold">How the model determines tokens</h1>
          <div className="flex items-center space-x-2">
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-all">
              <FaEllipsisH />
            </button>
            <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all">
              <FaPlus />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 bg-gray-50 p-4 overflow-y-auto scroll-chat space-y-4">
          {chatHistory.map((chat, index) => (
            <div key={index} className={`flex justify-start ${chat.sender === "AI" ? 'bg-blue-100' : 'bg-gray-100'} px-4 py-2 rounded-md`}>
              <div>{chat.message}</div>
            </div>
          ))}
        </div>

        {/* Input Section */}
        <div className={`p-4 shadow-md flex items-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
          <button onClick={handleVoiceMessage} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-all">
            <FaMicrophone />
          </button>
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={handleMessageChange}
            className="flex-1 px-4 py-2 border rounded-md ml-2"
          />
          {handleTypingIndicator()}
          <button onClick={handleSendMessage} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
            Send
          </button>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className={`w-1/4 shadow-md border-l p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
        <h2 className="text-lg font-semibold">GPT-4 Model</h2>
        <p className="text-sm">Enhanced GPT-4 model for improved accuracy and functionality.</p>
        <div className="mt-4 space-y-4">
          <div className="bg-green-100 p-4 rounded-md">Successfully generated responses!</div>
          <div className="bg-green-100 p-4 rounded-md">Search result for: "tokens and usage..."</div>
        </div>
      </aside>

      {/* Floating Action Button for Quick Action */}
      <div className="fixed bottom-10 right-10">
        <button className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all">
          <FaPlus size={24} />
        </button>
      </div>

      {/* File Upload */}
      <input
        type="file"
        id="file-upload"
        className="hidden"
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default ChatPage;
