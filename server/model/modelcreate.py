# Import necessary libraries
import tensorflow as tf
from keras.preprocessing.image import ImageDataGenerator
# from keras.optimizers import Adam
# from keras.models import Sequential
# from keras.layers import Dense, Dropout, Flatten
# from keras.applications import VGG19
# import os
# import numpy as np
# import cv2
# from sklearn.metrics import confusion_matrix, f1_score, accuracy_score, precision_score, roc_curve, roc_auc_score
# import matplotlib.pyplot as plt

# Declared paths for train, val and test sets
train_data_dir = './finaldataset/train'
validation_data_dir = './finaldataset/test'
test_data_dir = './finaldataset/test'

# Declared image dimensions and batch size
img_height = 128
img_width = 128
batch_size = 32
num_classes = 2

# Loading train, validation and test sets

# Creating an ImageDataGenerator for train,test and validation data
train_datagen = ImageDataGenerator(
    rescale=1. / 255)
validation_datagen = ImageDataGenerator(rescale=1. / 255)
test_datagen = ImageDataGenerator(rescale=1. / 255)

# Loading the train,test and validation data from directory using flow_from_directory method
train_generator = train_datagen.flow_from_directory(
    train_data_dir,
    target_size=(img_width, img_height),
    batch_size=batch_size,
    color_mode='grayscale',
    class_mode='binary')

validation_generator = validation_datagen.flow_from_directory(
    validation_data_dir,
    target_size=(img_width, img_height),
    batch_size=batch_size,
    color_mode='grayscale',
    class_mode='binary')

test_generator = test_datagen.flow_from_directory(
    test_data_dir,
    target_size=(img_width, img_height),
    batch_size=batch_size,
    color_mode='grayscale',
    class_mode='binary')

# Defining the model architecture
model = tf.keras.Sequential([
    tf.keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=(img_height, img_width, 1)),
    tf.keras.layers.MaxPooling2D(),
    tf.keras.layers.Conv2D(64, (3, 3), activation='relu'),
    tf.keras.layers.MaxPooling2D(),
    tf.keras.layers.Conv2D(32, (3, 3), activation='relu'),
    tf.keras.layers.MaxPooling2D(),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(256, activation='relu'),
    tf.keras.layers.Dense(1, activation='sigmoid')
])
# conv1_1 = Conv2D(64, kernel_size=3, activation='relu', padding='same', name='conv1_1')(inputImg)
#     conv1_1 = BatchNormalization()(conv1_1)
#     conv1_2 = Conv2D(64, kernel_size=3, activation='relu', padding='same', name='conv1_2')(conv1_1)
#     conv1_2 = BatchNormalization()(conv1_2)
#     pool1_1 = MaxPooling2D(pool_size=(2, 2), name='pool1_1')(conv1_2)
#     drop1_1 = Dropout(0.3, name='drop1_1')(pool1_1)
#
#     conv2_1 = Conv2D(128, kernel_size=3, activation='relu', padding='same', name='conv2_1')(drop1_1)
#     conv2_1 = BatchNormalization()(conv2_1)
#     conv2_2 = Conv2D(128, kernel_size=3, activation='relu', padding='same', name='conv2_2')(conv2_1)
#     conv2_2 = BatchNormalization()(conv2_2)
#     conv2_3 = Conv2D(128, kernel_size=3, activation='relu', padding='same', name='conv2_3')(conv2_2)
#     conv2_3 = BatchNormalization()(conv2_3)
#     pool2_1 = MaxPooling2D(pool_size=(2, 2), name='pool2_1')(conv2_3)
#     drop2_1 = Dropout(0.3, name='drop2_1')(pool2_1)
#
#     flatten = Flatten(name='flatten')(drop2_1)
#     ouput = Dense(7, activation='softmax', name='output')(flatten)
#     model = Model(inputs=inputImg, outputs=ouput)
#
# printing model summary
print(model.summary())

'''
# Define the model architecture
base_model = VGG19(weights='imagenet', include_top=False, input_shape=(img_width, img_height, 3))

for layer in base_model.layers:
    layer.trainable = False

model = Sequential()
model.add(base_model)
model.add(Flatten())
model.add(Dense(256, activation='relu'))
model.add(Dropout(0.5))  #my inference remove dropout layer because may be my model required more feature
model.add(Dense(num_classes, activation='softmax'))
'''
# Defining the optimizer with a specific learning rate
# Optimizer = tf.keras.optimizers.Adam(learning_rate=0.0001)

# Compiling the model
model.compile(optimizer='adam',
              loss=tf.losses.BinaryCrossentropy(),
              metrics=['accuracy'])

# Defining callbacks
logdir = 'logs'
tensorboard_callback = tf.keras.callbacks.TensorBoard(log_dir=logdir)
early_stopping_callback = tf.keras.callbacks.EarlyStopping(
    monitor='val_loss',
    patience=3,
    restore_best_weights=True
)

# Training the model
history = model.fit(train_generator,
                    epochs=8,
                    validation_data=validation_generator,
                    callbacks=[tensorboard_callback, early_stopping_callback])

# Saving the model
model.save('./confidentlatest_model.h5')



