import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

export default function Atualmente() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('atualmente.csv');
        const textData = await response.text();
        const parsedData = Papa.parse(textData, { header: true }).data;

        const cardContainer = document.getElementById('card-container');

        parsedData.forEach((item) => {
          const card = generateCard(
            item.nomeTuna,
            item.nomeCaloiro,
            item.imagem_pessoal,
            item.nomeCivil,
            item.instrumento,
            item.imagem_lateral
          );
          cardContainer.appendChild(card);
        });

        setData(parsedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const generateCard = (nomeTuna, nomeCaloiro, imagem_pessoal, nomeCivil, instrumento, imageSrc) => {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    if (imagem_pessoal) {
      const cardImage = document.createElement('img');
      cardImage.src = `caloiros/atualmente/${imagem_pessoal}.jpg`;
      cardImage.alt = nomeTuna;
      cardImage.classList.add('card-imagem_pessoal');
      cardImage.addEventListener('click', () => openZoom(cardImage.src));
      cardContainer.appendChild(cardImage);
    }

    return cardContainer;
  };

  const openZoom = (imageSrc) => {
    const overlay = document.createElement('div');
    overlay.classList.add('image-overlay');

    const zoomedImage = document.createElement('img');
    zoomedImage.src = imageSrc;
    zoomedImage.classList.add('zoomed-image');

    overlay.appendChild(zoomedImage);
    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
      document.body.classList.remove('noScroll');
    });

    document.body.appendChild(overlay);
    document.body.classList.add('noScroll');
  };

  return (
    <div id="card-container">
      {/* Cards will be appended here */}
    </div>
  );
}
