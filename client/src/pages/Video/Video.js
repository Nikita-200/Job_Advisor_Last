import React, { useState, useRef, useEffect } from "react";
import './Video.css'
const Video= () => {
  const [stream, setStream] = useState(null);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
    const [feedback, setFeedback] = useState("");
    const [res, setRes] = useState("");
     const [uniqueNumber, setUniqueNumber] = useState(null);
  const [questions, setQuestions] = useState([
  "What is your experience in React?",
  "Tell me about yourself.",
  "What are your strengths and weaknesses?",
  "How would you deal with a conflict in your group?",
  // Add more questions here as needed
]);
  const videoRef = useRef(null);

  const constraints = {
    audio: true,
    video: true
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      setStream(stream);
      videoRef.current.srcObject = stream;
    } catch (err) {
      console.error("Error accessing media devices: ", err);
    }
  };
useEffect(() => {
    // Fetch a single question from your questions array
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    const uniqueNum = Date.now(); // Using timestamp as a unique number
    setUniqueNumber(uniqueNum);
    // Combine question and unique number into the payload
  const payload = {
    question: randomQuestion,
    uniqueNumber: uniqueNum
  };
    setQuestions(randomQuestion);
    // Make an HTTP POST request to send the question to the Flask backend
  fetch("http://127.0.0.1:5000/send_question", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data); // Log the response from the backend
    // Handle the response as needed
  })
  .catch(error => {
    console.error("Error:", error);
    // Handle errors here, e.g., display an error message on the screen
  });
    // Start the camera when the component mounts
    startCamera();
  }, []);
  const startRecording = () => {
    const recorder = new MediaRecorder(stream);
    recorder.ondataavailable = handleDataAvailable;
    recorder.start();
    setRecording(true);
    setMediaRecorder(recorder);
  };

  const stopRecording = () => {
    mediaRecorder.stop();
    setRecording(false);
  };

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      setRecordedChunks((prev) => [...prev, event.data]);
    }
  };

  const handleDownload = () => {
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);
   const fileName = `${uniqueNumber}-recorded-video.webm`
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = fileName;
   a.click();
    window.URL.revokeObjectURL(url);

 // Delayed request to the backend after 5 seconds
    setTimeout(() => {
      fetch("http://127.0.0.1:5000/start_feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ videoPath: "recorded-video.webm" })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the response from the backend
        setFeedback(data.feedback); // Handle the response as needed
        setRes(data.res)
//        setBlink(data.blink)
      })
      .catch(error => {
        console.error("Error:", error);
        // Handle errors here, e.g., display an error message on the screen
      });
    }, 5000);
  };
  return (
    <div className="video-container">
      <video id="gum" ref={videoRef} playsInline autoPlay muted></video>
      <div id="question-container">
        <div style={{color:"white",fontSize:"20px",marginTop:"20px",marginBottom:"20px"}} className="question-item">{questions}</div>
      </div>
      <div id="buttons">
        <button className="login-button" id="start" onClick={startCamera}>
          Start camera
        </button>
        <button className="login-button"  id="record" onClick={startRecording} disabled={!stream || recording}>
          Record
        </button>
        <button className="login-button"  id="stop" onClick={stopRecording} disabled={!recording}>
          Stop
        </button>
        <button className="login-button"  id="backend" onClick={handleDownload} disabled={!recordedChunks.length}>
         Submit
        </button>
      </div>
       <div id="feedback-container">
       <div  style={{color:"white",width:"600px",marginTop:"20px"}} className="feedback-item">{res}</div>
        <div  style={{color:"white",width:"600px",marginTop:"20px"}} className="feedback-item">{feedback}</div>
      </div>
    </div>
  );
};

export default Video;

//import React, { useRef, useEffect } from 'react';
//import axios from 'axios';
//
//const VideoComponent = () => {
//    const videoRef = useRef();
//
//    useEffect(() => {
//        const fetchData = async () => {
//            try {
//                const response = await axios.get(`http://127.0.0.1:5000/video`, {
//                    responseType: 'blob',
//                });
//
//                const video = videoRef.current;
//
//                // Convert blob response to MediaStream
//                const stream = await response.data.stream();
//
//                video.srcObject = stream;
//            } catch (error) {
//                console.error('Error fetching video stream:', error);
//            }
//        };
//
//        fetchData();
//    }, []);
//
//    return (
//        <div>
//            <video ref={videoRef} autoPlay playsInline />
//        </div>
//    );
//};
//
//export default VideoComponent;
