import React, { useState, useEffect } from 'react';

const Card = ({ raza }) => {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    if (raza !== '') {
      fetch(`https://dog.ceo/api/breed/${raza}/images/random`)
        .then(response => response.json())
        .then(data => {
          setDogImage(data.message);
        })
        .catch(error => console.error('Error al cargar la imagen:', error));
    }
  }, [raza]);

  return (
    <div className='card'>
      <img src={dogImage} alt={`Imagen de ${raza}`} />
      <div>
        {raza}
      </div>
    </div>
    
  );
};

export default Card;
