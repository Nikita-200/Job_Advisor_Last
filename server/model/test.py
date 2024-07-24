# Imported necessary libraries
from tensorflow import keras
import tensorflow as tf
import os
import cv2
import imghdr
import numpy as np
from matplotlib import pyplot as plt

# Loading the model
model = keras.models.load_model('./confident_model.h5')
model.compile()

# Reading image using imread method
img = cv2.imread("./Test image/WIN_20240504_00_51_35_Pro.jpg")

# Converting image to greyscale and resizing it
gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
gray_img = np.expand_dims(gray_img, axis=-1)      #adding dimension because tf.image.resize() required 3D input grey scale has 2D
resize = tf.image.resize(gray_img, (128, 128))
plt.imshow(resize.numpy().astype(int), cmap='gray')
plt.show()

yhat = model.predict(np.expand_dims(resize/255, 0))
print(yhat)
yhat=1-yhat   #inference model got train on positive class as unconfident
print(yhat)
if yhat >= 0.55:
    print(f'Predicted class is Confident')
else:
    print(f'Predicted class is Unconfident')
