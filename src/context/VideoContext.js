import React, { createContext, useContext, useRef, useState } from 'react';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const requestCameraAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;

        // Play video only when the stream is ready
        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play().catch((error) => {
            console.error('Error attempting to play:', error);
          });
        };
      }
      setPermissionGranted(true);
    } catch (error) {
      console.error('Camera access denied:', error);
    }
  };

  const stopStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      setPermissionGranted(false);
    }
  };

  return (
    <VideoContext.Provider value={{ videoRef, requestCameraAccess, permissionGranted, stopStream }}>
      {children}
      <video ref={videoRef} className="fixed bottom-4 right-4 z-50 w-1/4 h-auto rounded-md border border-gray-300 shadow-lg" autoPlay muted />
    </VideoContext.Provider>
  );
};

export const useVideo = () => useContext(VideoContext);
