import os
from flask import Flask, render_template, request, redirect, url_for, Response
from werkzeug.utils import secure_filename

from matplotlib import pyplot as plt
import cv2
import numpy as np

# Imported necessary libraries
from tensorflow import keras
import tensorflow as tf
app = Flask(__name__)
# Loading the model
model = keras.models.load_model('./final_model.h5')
model.compile()

# Initialize the camera
  # 0 for default camera, you can change it to the desired camera index if you have multiple cameras

# Function to process frames from the webcam
def process_frame(frame):
    # Converting the frame to grayscale
    gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    gray_frame = np.expand_dims(gray_frame, axis=-1)  # Adding dimension because tf.image.resize() requires 3D input

    # Resizing the frame
    resize_frame = tf.image.resize(gray_frame, (128, 128))

    # Predicting confidence level
    yhat = model.predict(np.expand_dims(resize_frame / 255, 0))
    yhat = 1 - yhat  # Inference model trained on positive class as unconfident

    if yhat >= 0.55:
        message = 'Predicted Level of Confidence: High'
    elif yhat <= 0.30:
        message = 'Predicted Level of Confidence: Low'
    else:
        message = 'Predicted Level of Confidence: Neutral'

    return message



@app.route('/')
def index():
    return "Hi"

# Function to capture video from webcam and process frames
def video_feed():
    camera = cv2.VideoCapture(0)
    while True:
        success, frame = camera.read()
        if not success:
            break
        else:
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            # Process the frame
            message = process_frame(frame)

            # Display the frame with message
            cv2.putText(frame, message, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
            cv2.imshow('Frame', frame)
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')





@app.route('/video')
def video():
    return Response(video_feed(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True)
