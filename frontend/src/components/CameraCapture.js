import React, { useRef, useState } from 'react';

function CameraCapture() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  // Start the camera stream
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  };

  // Capture an image from the video stream
  const captureImage = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, 640, 480);
    const dataUrl = canvasRef.current.toDataURL('image/png');
    setCapturedImage(dataUrl);
  };

  return (
    <div>
      <button onClick={startCamera}>Start Camera</button>
      <button onClick={captureImage}>Capture Image</button>
      <video ref={videoRef} width="640" height="480" />
      <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }} />
      
      {capturedImage && (
        <div>
          <img src={capturedImage} alt="Captured" />
          <a 
            href={capturedImage} 
            download="captured_image.png" 
            className="save-button"
          >
            Save Image
          </a>
        </div>
      )}
    </div>
  );
}

export default CameraCapture;
