// src/components/WineDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importar useNavigate
import url from '../config/fetchInfo';
import '../css/wineModal.css'; // Importa el archivo CSS del modal
import background1 from '../assets/1.webp';
import background2 from '../assets/2.webp';
import background3 from '../assets/3.webp';

const WineDetails = () => {
  const { wineId } = useParams(); // Obtener el ID del vino de la URL
  const wineIdLong = Number(wineId); // Convertir a Long (número)
  const [selectedWine, setSelectedWine] = useState(null);
  const backgrounds = [background1, background2, background3]; // Imágenes de fondo
  const [currentBackground, setCurrentBackground] = useState(0);
  const navigate = useNavigate(); // Inicializar navigate

  useEffect(() => {
    if (wineIdLong) {
      fetch(`${url}/getWine?id=${wineIdLong}`) // Usar wineIdLong aquí
        .then(response => response.json())
        .then(data => setSelectedWine(data));
    }
  }, [wineIdLong]);

  // Cambia el fondo de manera alternante
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  const backToTheBasics = () => {
    navigate(`/`); // Redirigir a la página de detalles del vino
  };

  return (
    <div>
      <h2>Enología:</h2>
      {selectedWine && (
        <div className="detail" style={{ backgroundImage: `url(${backgrounds[currentBackground]})`, backgroundSize: 'cover' }}>
          <div className="detail-content">
            <span className="cerrar" onClick={backToTheBasics}>&times;</span> {/* Cambiar aquí */}
            {selectedWine.photo && (
              <img 
                src={`data:image/jpeg;base64,${selectedWine.photo}`} 
                alt={selectedWine.name} 
                style={{ width: '120px', height: '176px' }}
              />
            )}
            <h3>{selectedWine.name}</h3>
            <p><strong>Tipo:</strong> {selectedWine.type}</p>
            <p><strong>Año:</strong> {selectedWine.year}</p>
            <p><strong>Región:</strong> {selectedWine.region}</p>
            <p><strong>Alcohol:</strong> {selectedWine.alcoholPercentage}%</p>
            <p><strong>Código de barras:</strong> {selectedWine.barCode}</p>
            <p><strong>Precio:</strong> ${selectedWine.price.toLocaleString('es-AR')}</p>
            <p><strong>Fecha de adquisición:</strong> {new Date(selectedWine.acquisitionDate).toLocaleDateString('es-AR')}</p>
            <h4>Notas:</h4>
            <p><strong>Color:</strong> {selectedWine.notas.color}</p>
            <p><strong>Aroma:</strong> {selectedWine.notas.aroma}</p>
            <p><strong>Sabor:</strong> {selectedWine.notas.sabor}</p>
            <p><strong>Categoría:</strong> {selectedWine.category}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WineDetails;