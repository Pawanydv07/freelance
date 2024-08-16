import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/QuizInfoPage.css';

const QuizInfoPage = () => {
  const [agreed, setAgreed] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    if (agreed) {
      setStartQuiz(true);
      setTimeout(() => {
        navigate('/quiz');
      }, 1000);
    }
  };

  const handleRadioChange = async () => {
    setAgreed(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      streamRef.current = stream;
      videoRef.current.srcObject = stream;
      videoRef.current.play();
      setPermissionGranted(true);
    } catch (err) {
      console.error('Permission denied:', err);
      alert('Please grant camera and microphone permissions to proceed.');
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
    console.log('Photo taken:', imageDataURL);
    // You can now use imageDataURL as needed (e.g., upload it to a server)
  };

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className={`min-h-screen  flex flex-col items-center justify-center bg-gradient-to-r from-[#000428] to-[#004e92] text-white ${startQuiz ? 'page-turn' : '' } main-div`}>
      <div className="w-full max-w-6xl mt-20 min-h-screen-1/2 bg-white rounded-lg shadow-md p-8 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Quiz Instructions</h1>
        <p className="mb-4">
          Please read the following instructions carefully before starting the quiz:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Make sure you have a stable internet connection.</li>
          <li>You have a limited time to complete the quiz.</li>
          <li>Do not refresh the page during the quiz.</li>
          <li>Each question is mandatory and must be answered.</li>
          <li>Use the "Next" button to navigate through questions.</li>
          <li>Once you submit the quiz, you cannot return to make changes.</li>
          <li>Ensure your webcam and microphone are working properly.</li>
          <li>Take the quiz in a quiet and well-lit environment.</li>
          <li>Avoid any form of malpractice during the quiz.</li>
          <li>Make sure you understand each question before answering.</li>
          <li>If you face any technical issues, contact support immediately.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
        <p className="mb-4">
          This quiz is designed to assess your knowledge and understanding of the subject matter. Here are some key points to keep in mind:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>The quiz consists of multiple-choice questions.</li>
          <li>Each question carries equal weightage.</li>
          <li>There is no negative marking for incorrect answers.</li>
          <li>You can review your answers before final submission.</li>
          <li>The timer will be visible at the top of the screen.</li>
          <li>In case of a tie, the time taken to complete the quiz will be considered.</li>
          <li>Your webcam will be used for monitoring purposes.</li>
          <li>Make sure to allow camera and microphone permissions when prompted.</li>
          <li>Your progress will be saved automatically.</li>
          <li>Stay calm and focus on one question at a time.</li>
        </ul>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-indigo-600"
              checked={agreed}
              onChange={handleRadioChange}
            />
            <span className="ml-2">I have read and agree to the instructions</span>
          </label>
        </div>
        {permissionGranted && (
          <div className="mb-4 relative">
            <video ref={videoRef} className="live-video" autoPlay />
            <button
              className="mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded"
              onClick={takePhoto}
            >
              Take Photo
            </button>
          </div>
        )}
        <button
          className={`px-4 py-2 rounded ${agreed ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400 cursor-not-allowed'}`}
          onClick={handleStartQuiz}
          disabled={!agreed}
        >
          Start Your Test
        </button>
      </div>
    </div>
  );
};

export default QuizInfoPage;
