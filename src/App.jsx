
import { useEffect, useState } from "react";
import Details from "./Details";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  if (selectedId !== null) {
    return (
      <Details
        id={selectedId}
        retour={() => setSelectedId(null)}
      />
    );
  }

  return (
    <div className="container">
      <h1>Liste des Produits</h1>

      <div className="products">
        {products.map(product => (
          <div className="card" key={product.id}>
            <img src={product.image} />

            <h3>{product.title}</h3>

            <p>{product.price} $</p>

            <button onClick={() => setSelectedId(product.id)}>
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
