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

        // Define titles for specific indexes
        const titles = [
          "Tesoureiro FRACAE",
          "Tarefeiro FRACAE",
          "Ensaiador FRACAE",
          "Atuador FRACAE",
          "RP FRACAE",
          "Caloiros"
        ];

        const cardContainer = document.getElementById("card-container");

        parsedData.forEach((item, index) => {
          const card = generateCard(
            item.nomeTuna,
            item.nomeCaloiro,
            item.imagem_pessoal,
            item.nomeCivil,
            item.instrumento,
            item.imagem_lateral
          );

          // Add a title for specific indexes
          if (titles[index]) {
            const text = document.createElement("div");
            text.id = "Titulo-Hierarquia";
            text.innerHTML = titles[index];
            text.style.marginTop = "20px";
            cardContainer.appendChild(text);
          }

          cardContainer.appendChild(card);
        });

        setData(parsedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
}



function generateCard(nomeTuna, nomeCaloiro, imagem_pessoal,nomeCivil, instrumento, imageSrc) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    
    if(imagem_pessoal != ""){
    const cardImage = document.createElement("img");
    cardImage.src = `caloiros/atualmente/${imagem_pessoal}.jpg`;
    cardImage.alt = nomeTuna;
    cardImage.classList.add("card-imagem_pessoal");
    cardContainer.appendChild(cardImage);
    }
  
    const cardImagemLateral = document.createElement("img");
    cardImagemLateral.src = imageSrc;
    cardImagemLateral.alt = instrumento;
    cardImagemLateral.classList.add("card-imagem_lateral");
  
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");
  
    const cardNomeCivil = document.createElement("h2");
    cardNomeCivil.textContent = nomeCivil;
    cardNomeCivil.classList.add("card-nomeCivil");
  
  
    const cardNomeTuna = document.createElement("h2");
    cardNomeTuna.textContent = nomeTuna;
    cardNomeTuna.classList.add("card-nomeTuna");
  
    const cardNomeCaloiro = document.createElement("p");
    cardNomeCaloiro.textContent = nomeCaloiro
    cardNomeCaloiro.classList.add("card-nomeCaloiro");
  
    const cardInstrumento = document.createElement("p");
    cardInstrumento.textContent = `Instrumento: ${instrumento}`;
    cardInstrumento.classList.add("card-instrumento");
  
    cardInfo.appendChild(cardNomeTuna);
    cardInfo.appendChild(cardNomeCaloiro);
    cardInfo.appendChild(cardNomeCivil);
    cardInfo.appendChild(cardInstrumento);
  
  
    cardContainer.appendChild(cardImagemLateral);
    cardContainer.appendChild(cardInfo);
  
    return cardContainer;
  }
