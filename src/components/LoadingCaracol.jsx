// LoadingCaracol.jsx
import React from 'react';
import loadingGif from '../assets/loading.gif'; // Ruta del GIF de carga

function Caracol() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <img src={loadingGif} alt="Cargando..." width="500" />
    </div>
  );
}

export default Caracol;