import React, { useState, useEffect } from 'react';
import url from '../config/fetchInfo';  

const WineDetails = ({ wineId }) => {
  const [selectedWine, setSelectedWine] = useState(null);

  useEffect(() => {
    if (wineId) {
      fetch(`${url}/getWine?id=${wineId}`)
        .then(response => response.json())
        .then(data => setSelectedWine(data));
    }
  }, [wineId]);

  return (
    <div>
      <h2>Enología:</h2>
      {selectedWine ? (
        <div>
          {/* Mostrar la imagen en base64 */}
          {selectedWine.photo && (
            <img 
              src={`data:image/jpeg;base64,${selectedWine.photo}`} 
              alt={selectedWine.name} 
              style={{ width: '120px', height: '176px' }} // Tamaño ajustable de la imagen
            />
          )}
          <h3>{selectedWine.name}</h3>
          <p>Tipo: {selectedWine.type}</p>
          <p>Año: {selectedWine.year}</p>
          <p>Región: {selectedWine.region}</p>
          <p>Alcohol: {selectedWine.alcoholPercentage}%</p>
        </div>
      ) : (
        <p>Selecciona un vino para ver los detalles.</p>
      )}
    </div>
  );
};

export default WineDetails;

