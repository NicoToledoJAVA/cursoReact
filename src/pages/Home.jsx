//Home.jsx
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import url from '../config/fetchInfo';
import '../css/style.css';
import { useCart } from '../context/CarContext';
import Cart from '../components/Cart';
import WineModal from '../components/WineModal';
import Caracolerdo from '../components/LoadingCaracol.jsx'; // Importa el componente Caracol

function Home() {
  const [wines, setWines] = useState([]);
  const [selectedWine, setSelectedWine] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cartItems, addItem, clearCart } = useCart(); // Importa clearCart
  const [loading, setLoading] = useState(true); // Estado de carga
  useEffect(() => {
    fetchWines();
  }, []);

  useEffect(() => {
    if (cartItems.length > 0 && !showCart) {
      setShowCart(true);
    }
  }, [cartItems, showCart]);

  const fetchWines = () => {
    fetch(`${url}/getAll`)
      .then(response => response.json())
      .then(data => {
        setWines(data);
        setLoading(false); // Detiene el estado de carga
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
    const isWineInCart = cartItems.some(wine => wine.id === wineId);

    if (isWineInCart) {
      const wine = wines.find(wine => wine.id === wineId);
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
      fetch(`${url}/getWine?id=${wineId}`)
        .then(response => response.json())
        .then(data => {
          setSelectedWine(data);
          setShowModal(true);
        });
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const addToCart = (wine) => {
    const existingWine = cartItems.find(vino => vino.id === wine.id);

    if (existingWine) {
      if (existingWine.quantity < 9) {
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
      addItem(wine, 1);
      Swal.fire({
        position: "bottom-end",
        toast: true,
        width: "20%",
        icon: "success",
        title: "Producto agregado a la venta",
        showConfirmButton: false,
        timer: 1500
      });
    }
    closeModal();
  };

  const handleBuy = () => {
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    Swal.fire({
      title: `El precio total de la venta es: $${totalAmount.toLocaleString('es-AR')}`,
      text: "¿Quiere proceder a la venta?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, vender!",
      cancelButtonText: "No"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Listo",
          text: "¡Ha habido éxito en la venta!",
          icon: "success"
        });
        clearCart(); // Vaciar el carrito después de la compra
        setShowCart(false);
      }
    });
  };

  const handleClearCart = () => {
    Swal.fire({
      title: "¿Estás seguro que quieres cancelar la venta?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cancelar venta!",
      cancelButtonText: "No"
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart(); // Llama a clearCart para vaciar el carrito
        Swal.fire({
          title: "Venta cancelada",
          text: "La venta está vacía.",
          icon: "success"
        });
        setShowCart(false);
      }
    });
  };


  return (

    <div>


      {loading ? ( // Condición para mostrar "Loading..."
        <Caracolerdo/> // Muestra el componente Caracolerdo mientras carga
      ) : (

        <div>
          <button className="button button-blue" onClick={toggleCart}>
            Ver Venta ({cartItems.length})
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
        </div>
      )}

      <WineModal selectedWine={selectedWine} showModal={showModal} closeModal={closeModal} addToCart={addToCart} />
      <Cart
        showCart={showCart}
        toggleCart={toggleCart}
        handleBuy={handleBuy}
        handleClearCart={handleClearCart}
      />
    </div>
  );
}

export default Home;