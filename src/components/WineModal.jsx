// src/components/WineModal.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Cambiar useHistory a useNavigate

const WineModal = ({ selectedWine, showModal, closeModal, addToCart }) => {
    const navigate = useNavigate(); // Hook para redirigir a otra ruta

    if (!selectedWine || !showModal) return null;

    const stringPrice = selectedWine.price.toLocaleString('es-AR');
    const falsePrice = (selectedWine.price * 1.8).toLocaleString('es-AR');

    const handleImageClick = () => {
        navigate(`/wineDetails/${selectedWine.id}`); // Redirigir a la página de detalles del vino
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <div className="wine-details">
                    <h2>Enología:</h2>
                    {selectedWine.photo && (
                        <div className="image-container">
                            <img
                                src={`data:image/jpeg;base64,${selectedWine.photo}`}
                                alt={selectedWine.name}
                                className="wine-image"
                                onClick={handleImageClick} // Añadir la llamada a la acción
                            />
                            <span className="tooltip">Haga clic para ver detalles del vino</span> {/* Tooltip */}
                        </div>
                    )}
                    <h3>{selectedWine.name}</h3>
                    <p>Tipo: {selectedWine.type}</p>
                    <p>Año: {selectedWine.year}</p>
                    <p>Región: {selectedWine.region}</p>
                    <p>Alcohol: {selectedWine.alcoholPercentage}%</p>
                    <p className="false-price">Precio anterior: ${falsePrice}</p>
                    <p>
                        <span className="no-bg">Precio: </span>
                        <span className="inner-details price">${stringPrice}</span>
                        <span className="no-bg-checked">✔</span>
                    </p>
                    <button
                        className="button button-blue"
                        onClick={() => addToCart(selectedWine)}
                    >
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WineModal;