//src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import url from '../config/fetchInfo';
import '../css/style.css';
import { useCart } from '../context/CarContext'; // Importar el contexto del carrito
import Cart from '../components/Cart'; // Importar el componente del carrito
import WineModal from '../components/WineModal'; // Importar el componente del modal

function Home() {
  const [wines, setWines] = useState([]);
  const [selectedWine, setSelectedWine] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showCart, setShowCart] = useState(false); // Estado para mostrar/ocultar el carrito
  const { cartItems, addItem } = useCart(); // aquí se trae el contexto custom del carrito que hicimos

  useEffect(() => {
    fetchWines();
  }, []);

  const fetchWines = () => {
    fetch(`${url}/getAll`)
      .then(response => response.json())
      .then(data => {
        setWines(data);
      });
  };

  const handleMouseOver = (event) => {
    const row = event.currentTarget;
    row.classList.add('hovered');
  };

  const handleMouseOut = (event) => {
    const row = event.currentTarget;
    row.classList.remove('hovered');
  };

  const handleWineClick = (wineId) => {
    // Verificar si el vino ya está en el carrito
    const isWineInCart = cartItems.some(wine => wine.id === wineId);
    
    if (isWineInCart) {
      const wine = wines.find(wine => wine.id === wineId); // Obtener el vino directamente desde la lista de vinos
      addToCart(wine);
      Swal.fire({
        position: "bottom-end",
        toast: true,
        width: "20%",
        icon: "success",
        title: `Se agregó una unidad mas de <u>${wine.name}</u> a la venta`,
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      // Si el vino no está en el carrito, entonces mostrar el modal
      fetch(`${url}/getWine?id=${wineId}`)
        .then(response => response.json())
        .then(data => {
          setSelectedWine(data);
          setShowModal(true); // Mostrar el modal cuando se selecciona un vino
        });
    }
  };

  const closeModal = () => {
    setShowModal(false); // Cerrar el modal
  };

  const toggleCart = () => {
    setShowCart(!showCart); // Mostrar/ocultar el carrito
  };

  const addToCart = (wine) => {
    // Verificar si el vino ya está en el carrito
    const existingWine = cartItems.find(vino => vino.id === wine.id);
  
    if (existingWine) {
      // Abrir el carrito si no está abierto
      if (!showCart) {
        toggleCart(); // Llama a toggleCart() para abrir el carrito
      }
      if (existingWine.quantity < 9) { // Si hay menos de 9 unidades, incrementar la cantidad
        addItem(wine, existingWine.quantity + 1);
        Swal.fire({
          position: "bottom-end",
          toast: true,
          width: "20%",
          icon: "success",
          title: `Se ha agregado otra unidad de ${wine.name}`,
          showConfirmButton: false,
          timer: 1500
        });
        
      } else {
        Swal.fire({
          position: "bottom-end",
          toast: true,
          width: "20%",
          icon: "warning",
          title: "No puedes agregar más de 9 unidades",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } else {
      addItem(wine, 1); // Agregar el vino al carrito si no existe
      Swal.fire({
        position: "bottom-end",
        toast: true,
        width: "20%",
        icon: "success",
        title: "Producto agregado al carrito",
        showConfirmButton: false,
        timer: 1500
      });
      
      
    }
    closeModal();
  };  

  return (
    <div>
      <button className="button button-blue" onClick={toggleCart}>
        Ver Carrito ({cartItems.length})
      </button>

      <table>
        <thead>
          <tr>
            <th className="column-header">Nombre</th>
            <th className="column-header">Año</th>
            <th className="column-header">Tipo</th>
            <th className="column-header">Categoría</th>
            <th className="column-header">Precio</th>
          </tr>
        </thead>
        <tbody>
          {wines.map((wine) => (
            <tr
              key={wine.id}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={() => handleWineClick(wine.id)}
              style={{ cursor: 'pointer' }}
            >
              <td className="celdas alineacion-izq">{wine.name}</td>
              <td className="celdas">{wine.year}</td>
              <td className="celdas">{wine.type}</td>
              <td className="celdas">{wine.category}</td>
              <td className="celdas bolder">${wine.price.toLocaleString('es-AR')}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <WineModal selectedWine={selectedWine} showModal={showModal} closeModal={closeModal} addToCart={addToCart} />
      <Cart showCart={showCart} toggleCart={toggleCart} /> {/* Renderizar el carrito aquí */}
    </div>
  );
}

export default Home;