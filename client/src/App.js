import Navbar from "./Navbar";
import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
const [name, setName] = useState("");
  const [listOfProducts, setListOfProducts] = useState([]);
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);
  

  useEffect(() => {
    Axios.get("http://localhost:3001/getProducts").then((response) => {
      setListOfProducts(response.data);
    });
  }, []);

  const createProduct = () => {
    Axios.post("http://localhost:3001/createProduct", {
      name,
      desc,
      image,
      price,
      qty
    }).then((response) => {
      setListOfProducts([
        ...listOfProducts,
        {
          name,
          desc,
          image,
          price,
          qty

        }
      ]);
    });
  };

  

  return (
 <div className="App">

<h1 style={{fontFamily:"Georgia", textAlign:"center"}}>New York Sity
     <img style={{marginLeft:"10px"}} src="NYSLogo.png" alt="New York Sity" width="30px" height="30px"/>
     </h1>



    <Navbar/>


      <div>

         
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

         <input
          type="text"
          placeholder="Desc..."
          onChange={(event) => {
            setDesc(event.target.value);
          }}
        />

          <input
          type="text"
          placeholder="Image..."
          onChange={(event) => {
            setImage(event.target.value);
          }}
        />

        <input
          type="number"
          placeholder="Price..."
          onChange={(event) => {
            setPrice(event.target.value);
          }}

        />

        <input
          type="number"
          placeholder="Quantity..."
          onChange={(event) => {
            setQty(event.target.value);
          }}

        />

        <button onClick={createProduct}> Create Product </button>

      </div>
<div className="productsDisplay2">
      <div className="productsDisplay">
        {listOfProducts.map((product) => {
          return (
            <div>
               
              <div className="feedContainer">
                <div className="feedTable">
             <img className="productImage" src= {product.image} alt="Product" ></img> 
             <div className="productText">
             <h3>Name: {product.name}</h3>
              <h5>Desc: {product.desc}</h5> 
              <h5>Price: ${product.price}</h5>
              <h5>Qty: {product.qty}</h5>
              </div>
              </div>
             </div>

            </div>
          );
        })}
      </div>
</div>



    </div>
  );
}

export default App;



