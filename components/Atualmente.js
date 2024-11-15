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

  function generateCard(nomeTuna, nomeCaloiro, imagem_pessoal, nomeCivil, instrumento, imageSrc) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    
    if(imagem_pessoal != "") {
      const cardImage = document.createElement("img");
      cardImage.src = `caloiros/atualmente/${imagem_pessoal}.jpg`;
      cardImage.alt = nomeTuna;
      cardImage.classList.add("card-imagem_pessoal");
      
      // Add click event to open modal with the full-size image
      cardImage.addEventListener("click", () => {
        openImageModal(cardImage.src);
      });
      
      cardContainer.appendChild(cardImage);
    }
  
    // Remaining card elements...
    // (Keep the rest of your original code here)
  
    return cardContainer;
  }
  

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

  function openImageModal(src) {
    let modal = document.querySelector(".image-modal");
  
    if (!modal) {
      // Create modal element if it doesn't exist
      modal = document.createElement("div");
      modal.classList.add("image-modal");
      document.body.appendChild(modal);
  
      modal.addEventListener("click", () => {
        modal.classList.remove("show");
      });
    }
  
    // Set the image source and display the modal
    modal.innerHTML = `<img src="${src}" alt="Zoomed Image">`;
    modal.classList.add("show");
  }
  
}
