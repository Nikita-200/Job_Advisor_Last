import zipfile
import os
zip_file_path = './archive.zip'
extract_to = './'
def extract_zip(zip_file_path, extract_to):
    # Create a ZipFile object
    with zipfile.ZipFile(zip_file_path, 'r') as zip_ref:
        # Extract all contents to the specified directory
        zip_ref.extractall(extract_to)
# # Ensure the extraction directory exists
# os.makedirs(extract_to, exist_ok=True)
# extract_zip(zip_file_path, extract_to)

#Code for data cleaning

import cv2
from mtcnn import MTCNN
import os
import shutil

# Setting the path to the directory containing the images
data_dir = './dataset/train/confident'

# Created an instance of the MTCNN model
detector = MTCNN()

# Created new directory to store the filtered images
filtered_dir = os.path.join(data_dir, 'filtered_conf')
os.makedirs(filtered_dir, exist_ok=True)

# Loop through each image in the directory
for filename in os.listdir(data_dir):
    if filename.endswith('.jpg') or filename.endswith('.png'):
        # Reading the image file
        img_path = os.path.join(data_dir, filename)
        img = cv2.imread(img_path)
        # Detecting faces in the image
        faces = detector.detect_faces(img)
        # Checking if the image contains any faces
        if len(faces) == 0:
            # If there are no faces then move the image to the filtered directory
            shutil.move(img_path, os.path.join(filtered_dir, filename))
            print(f"{filename} moved to filtered directory")
