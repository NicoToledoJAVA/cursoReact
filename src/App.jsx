import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {    
    fetch('https://vps-3858808-x.dattaweb.com:8443/products/getListFast', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({}),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('La respuesta del backEnd no fue la esperada');
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error al fetchear:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Número</th>
            <th>Producto</th>
            <th>Stock</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.product_number}</td>
              <td>{product.name}</td>                
              <td>{product.stock}</td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App
