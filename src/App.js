import "./App.css";
import { useEffect, useState } from "react";
import { API } from "./global";

function App() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch(`${API}/cartTask`)
      .then((res) => res.json())
      .then((data) => setProductList(data));
  }, []);
  return (
    <div className="App">
      <Product productList={productList} />
      
    </div>
  );
}
function Product({ productList }) {
  return (
    <div className="product-list">
      {productList.map((pd, index) => (
        <ProductDisplay pd={pd} key={index} />
        
      ))}
    </div>
  );
}
function ProductDisplay({ pd }) {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="about-product">
      <div>
        <img src={pd.thumbnail} alt="mobile" />
      </div>
      <div className="product-details">
        <h3>{pd.title}</h3>
        <h4>{pd.description}</h4>
        <h6>RS.{pd.price}</h6>
        <p>rating:{pd.rating}</p>

        <div className="quantity-product">
          <div
            role="group"
            aria-label="Small button group"
            className="quantity-product"
          >
            <button
              onClick={() => setQuantity(quantity + 1)}
              type="button"
              class="btn btn-outline-primary"
            >
              +
            </button>
            <button type="button" className="btn btn-outline-primary">
              {quantity}
            </button>
            <button
              onClick={() => {
                setQuantity(quantity - 1);
              }}
              type="button"
              className="btn btn-outline-primary"
            >
              -
            </button>
            <div className="total-price">
              <p>Total Amount : Rs.{pd.price * quantity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
