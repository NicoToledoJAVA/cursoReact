import React, { useState, useEffect } from 'react';
import url  from '../config/fetchInfo'; 

const WineTable = ({ onWineSelect }) => {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    fetch(`${url}/getAll`) 
      .then(response => response.json())
      .then(data => setWines(data));
  }, []);

  const handleRowClick = (id) => {
    onWineSelect(id); //Llamaremos a su función padre para setear el vino seleccionado
  };

  return (
    <div>
      <h2>Cava Actual</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Año</th>
            <th>Tipo</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {wines.map(wine => (
            <tr key={wine.id} onClick={() => handleRowClick(wine.id)} style={{ cursor: 'pointer' }}>
              <td>{wine.id}</td>
              <td>{wine.name}</td>
              <td>{wine.year}</td>
              <td>{wine.type}</td>
              <td>{wine.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WineTable;