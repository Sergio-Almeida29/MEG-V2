import React, { useState } from 'react';
import styles from './Slideshow.module.css';

// Define images and descriptions in an array of objects
const images = [
  { src: '/slideshow/1.jpg', description: 'Digressão de Verão FRACÆ 2024 - Coimbra' },
  { src: '/slideshow/2.jpg', description: 'Churrasco com afilhadas' },
  { src: '/slideshow/3.jpg', description: 'Jantar com a TUNAFE' },
  { src: '/slideshow/4.jpg', description: 'Cortejo 2024' },
  { src: '/slideshow/5.jpg', description: '1º jantar FRACÆ 2024/25' },
  { src: '/slideshow/6.jpg', description: 'Digressão de Verão FRACÆ 2024 - Aveiro'}
];

export default function Slideshow() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.slideshow}>
      <img
        src={images[currentImage].src}
        alt={`Image ${currentImage + 1}`}
        className={styles.image}
      />
      <div className={styles.description}>
        <p>{images[currentImage].description}</p>
      </div>
      <div className={styles.navigation}>
        <button onClick={prevImage} className={styles.arrow}>&#10094;</button>
        <button onClick={nextImage} className={styles.arrow}>&#10095;</button>
      </div>
    </div>
  );
}
