
import { useEffect, useState } from "react";

function Details({ id, retour }) {

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (product === null) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details">

      <button onClick={retour}>Retour</button>

      <h1>{product.title}</h1>

      <img src={product.image} />

      <h3>{product.price} $</h3>

      <p>{product.description}</p>

      <p>Category: {product.category}</p>

      <p>Rating: {product.rating.rate}</p>

    </div>
  );
}

export default Details;
