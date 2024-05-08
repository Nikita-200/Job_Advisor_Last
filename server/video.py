# import cv2
# from flask import Flask, Response
# from tensorflow import keras
# import tensorflow as tf
# import numpy as np
# from flask_cors import CORS
# app = Flask(__name__)
# CORS(app, supports_credentials=True)
# # Loading the model
# model = keras.models.load_model('./newer_model.h5')
# model.compile()
#
# class VideoCapture:
#     def __init__(self):
#         self.video = cv2.VideoCapture(0)
#
#     def __del__(self):
#         self.video.release()
#
# def process_frame(frame):
#     gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
#     gray_frame = np.expand_dims(gray_frame, axis=-1)
#     resize_frame = tf.image.resize(gray_frame, (128, 128))
#     yhat = model.predict(np.expand_dims(resize_frame / 255, 0))
#
#     confidence = 1 - yhat
#     print(confidence)
#     # Inference model trained on positive class as unconfident
#
#     if confidence >= 0.55:
#         message = 'Predicted Level of Confidence: High'
#     elif confidence <= 0.30:
#         message = 'Predicted Level of Confidence: Low'
#     else:
#         message = 'Predicted Level of Confidence: Neutral'
#     return message
#
# def generate_frames(cap):
#     while True:
#         ret, frame = cap.video.read()
#         if not ret:
#             cap.video.release()
#             break
#         confidence = process_frame(frame)
#         print(confidence)
#         frame_bytes = cv2.imencode('.jpg', frame)[1].tobytes()
#         yield (b'--frame\r\n'
#                b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')
#
# @app.route('/video')
# def video():
#     cap = VideoCapture()
#     return Response(generate_frames(cap), mimetype='multipart/x-mixed-replace; boundary=frame')
#
# # @app.route('/video')
# # def video():
# #     cap = VideoCapture()
# #     return Response(video_feed(cap), mimetype='multipart/x-mixed-replace; boundary=frame')
#
# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, request, Response
from tensorflow import keras
import tensorflow as tf
import numpy as np
import cv2


# Loading the model
model = keras.models.load_model('./model/newest_model.h5')
model.compile()

class VideoCapture:
    def __init__(self, video_file):
        self.video = cv2.VideoCapture(video_file)

    def __del__(self):
        self.video.release()

def process_frame(frame):
    gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    gray_frame = np.expand_dims(gray_frame, axis=-1)
    resize_frame = tf.image.resize(gray_frame, (128, 128))
    yhat = model.predict(np.expand_dims(resize_frame / 255, 0))
    confidence = 1 - yhat
    print(confidence)
    if confidence >= 0.55:
        msg = 'Predicted Level of Confidence: High'
    elif confidence <= 0.30:
        msg = 'Predicted Level of Confidence: Low'
    else:
        msg = 'Predicted Level of Confidence: Neutral'
    print(msg)
    return confidence

def generate_frames(cap):
    confidence_predictions = []
    while True:
        ret, frame = cap.video.read()
        if not ret:
            break
        confidence = process_frame(frame)
        confidence_predictions.append(confidence)

        # frame_bytes = cv2.imencode('.jpg', frame)[1].tobytes()
        # yield (b'--frame\r\n'
        #        b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')

    # Calculate the majority prediction after processing all frames
    confidence_array = np.array(confidence_predictions)
    majority_prediction = np.mean(confidence_array)
    print(majority_prediction)
    if majority_prediction >= 0.55:
        message = 'Majority Predicted Level of Confidence: High'
    elif majority_prediction <= 0.30:
        message = 'Majority Predicted Level of Confidence: Low'
    else:
        message = 'Majority Predicted Level of Confidence: Neutral'
    print(message)
    # yield (b'--frame\r\n'
    #        b'Content-Type: text/plain\r\n\r\n' + message.encode() + b'\r\n')

# @app.route('/video', methods=['POST'])
# def video():
file = 'C:/Users/Dell/Downloads/WhatsApp Video 2024-05-05 at 5.51.37 PM.mp4'

if file:
    cap = VideoCapture(file)
    generate_frames(cap)


