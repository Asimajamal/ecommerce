import React, { useContext } from "react";
import { ProductsContext } from "../Global/ProductsContext";
import { CartContext } from "../Global/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Products = () => {
  const addToCart = () => {
    toast.success("successfully added to Cart");
  };

  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);
  // const [addCart,setAddCart]=useState('ADD TO CART')

  return (
    <div className="container me-2">
      <div className="d-flex row ">
        {" "}
        {products.map((product) => (
          <div
            className="card my-3 mx-3 "
            key={product.id}
            style={{ width: "15rem" }}
          >
            <img src={product.image} alt="img" />
            <div className="card-body">
              <h5 className="card-title text-center">{product.name}</h5>
              <p className="card-text text-muted text-center">
                ${product.price}
              </p>

              {product.status === "hot" ? (
                <span className="badge bg-danger">Hot</span>
              ) : (
                ""
              )}
              {product.status === "new" ? (
                <span className="badge bg-success">New</span>
              ) : (
                ""
              )}
              <button
                className="btn btn-sm w-100"
                style={{ backgroundColor: "chocolate" }}
                onClick={() => {
                  dispatch({ type: "ADD TO CART", id: product.id, product });
                  addToCart();
                }}
              >
                ADD TO CART
              </button>
              <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
