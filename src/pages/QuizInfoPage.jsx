import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Draggable from 'react-draggable';
import { FaCamera, FaExclamationTriangle, FaUser, FaInfoCircle } from 'react-icons/fa';

const QuizInfoPage = () => {
  const [agreed, setAgreed] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);
  const [timer, setTimer] = useState(30); // Countdown timer for quiz start
  const [showTooltip, setShowTooltip] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const navigate = useNavigate();

  // Countdown Timer for quiz start (optional, can be shown to users)
  useEffect(() => {
    if (startQuiz && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    if (timer === 0 && startQuiz) {
      // Once the timer reaches 0, navigate to the quiz page
      navigate('/quiz');
    }
  }, [startQuiz, timer, navigate]);

  const handleStartQuiz = () => {
    if (agreed) {
      setStartQuiz(true); // Start the countdown timer
    }
  };

  const handleRadioChange = async () => {
    setAgreed(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play().catch((error) => {
          console.error('Error trying to play video:', error);
        });
      }
      setPermissionGranted(true);
    } catch (err) {
      console.error('Permission denied:', err);
      alert('Please grant camera and microphone permissions to proceed. 🙏');
    }
  };

  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageDataURL = canvas.toDataURL('image/png');
    console.log('📸 Photo taken:', imageDataURL);
  };

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#000428] to-[#004e92] text-white ${startQuiz ? 'page-turn' : ''} main-div`}>
      <div className="w-full max-w-6xl mt-20 min-h-screen-1/2 bg-white rounded-lg shadow-md p-8 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700">🚀 Quiz Instructions 📚</h1>
        <div className="text-center mb-6">
          <p className="text-lg text-gray-600">🎉 Please read the instructions carefully before proceeding!</p>
          <div className="flex justify-center items-center space-x-4">
            <div className="w-1/2 text-sm text-gray-500">👀 Step 1: Agree to the instructions</div>
            <div className="w-1/2 text-sm text-gray-500">📹 Step 2: Grant camera & microphone permissions</div>
          </div>
        </div>

        <div className="flex flex-col space-y-4 mb-6">
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>⚡ Make sure you have a stable internet connection.</li>
            <li>✅ Each question is mandatory and must be answered.</li>
            <li>🚫 Do not refresh the page during the quiz.</li>
            <li>🎤 Ensure your webcam and microphone are working properly.</li>
            <li>⏳ The timer will be visible at the top of the screen.</li>
          </ul>
        </div>

        <div className="mb-4 flex items-center justify-center space-x-2">
          <label className="inline-flex items-center text-gray-800">
            <input
              type="radio"
              className="form-radio text-indigo-600"
              checked={agreed}
              onChange={handleRadioChange}
            />
            <span className="ml-2 text-lg">I have read and agree to the instructions 🤝</span>
          </label>
        </div>

        {permissionGranted && (
          <Draggable>
            <div className="draggable-video mb-4 relative">
              <video ref={videoRef} className="live-video rounded-md border border-gray-300 shadow-lg" autoPlay muted playsInline />
              <button
                className="mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded flex items-center"
                onClick={takePhoto}
              >
                <FaCamera className="inline-block mr-2" /> 📸 Take Photo
              </button>
            </div>
          </Draggable>
        )}

        {startQuiz && (
          <div className="mt-6 text-center">
            <p className="text-lg text-gray-700 mb-4">The quiz will start in:</p>
            <div className="text-4xl font-bold text-indigo-600 animate-bounce">
              {timer} {timer === 1 ? 'Second' : 'Seconds'}
            </div>
            <p className="text-sm text-gray-500 mt-2">✨ Get ready to shine! 💫</p>
          </div>
        )}

        {!startQuiz && (
          <div className="mt-6 text-center">
            <button
              className={`px-6 py-3 text-white text-xl font-semibold rounded-lg ${agreed ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400 cursor-not-allowed'}`}
              onClick={handleStartQuiz}
              disabled={!agreed}
            >
              {agreed ? '🚀 Start Your Test' : '🙏 Please Agree to Continue'}
            </button>
          </div>
        )}

        {permissionGranted === false && (
          <div className="mt-4 text-red-500 text-center">
            <FaExclamationTriangle className="inline-block mr-2" />
            Camera & Microphone permissions are required to proceed. 🎤📹
          </div>
        )}

        <div className="mt-4 text-center">
          <div className="flex justify-center items-center space-x-2">
            <FaUser className="text-gray-600" />
            <p className="text-gray-600 text-sm">👋 Welcome, get ready for an amazing quiz experience!</p>
          </div>
        </div>

        {/* Tooltip for Instructions */}
        <div className="absolute top-0 right-0 mt-4 mr-4 cursor-pointer" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
          <FaInfoCircle className="text-indigo-700 text-2xl" />
          {showTooltip && (
            <div className="tooltip bg-indigo-700 text-white p-2 rounded-lg shadow-lg">
              <p>📹 Ensure your camera and microphone are working before starting the quiz!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizInfoPage;
