import { Cloudinary } from '@cloudinary/url-gen';
import { v2 as cloudinary } from 'cloudinary';
import path from 'path';
import fs from 'fs';

const cld = new Cloudinary({ cloud: { cloudName: 'dz2vkxwnu' } });

cloudinary.config({
  cloud_name: 'dz2vkxwnu',
  api_key: '197472977373695',
  api_secret: 'A7KQ6w9ZE70AJjRrQQQhXOfzyvo'
});

// Read the list of image files in your media folder
const mediaFolderPath = path.join(__dirname, 'src/media');
const files = fs.readdirSync(mediaFolderPath);

// Upload each image to Cloudinary
files.forEach((file) => {
  const imagePath = path.join(mediaFolderPath, file);
  cloudinary.uploader.upload(imagePath, { public_id: file }, (error, result) => {
    if (error) {
      console.log(`Upload error for ${file}:`, error);
    } else {
      console.log(`Upload result for ${file}:`, result);
    }
  });
});
