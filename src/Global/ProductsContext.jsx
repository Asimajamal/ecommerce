import React, { createContext } from "react";
import { useState } from "react";
import babycloths from "../assets/babycloth.jpg";

import shoe1 from "../assets/shoe1.jpg";
import shoe2 from "../assets/shoe2.jpg";
import shoe3 from "../assets/shoe3.jpg";
import shoe4 from "../assets/shoe4.jpg";
import Lipstics from "../assets/Lipstics.jpg";
import cloths from "../assets/cloths.jpg";
import cosmetics from "../assets/cosmetics.jpg";


export const ProductsContext = createContext();
const ProductsContextProvider = (props) => {
  const [products] =
    useState([
      {
        id: 1,
        name: "Baby-Shirts",
        price: 4000,
        image: babycloths,
        status: "new",
        
      },
      {
        id: 2,
        name: "Dark-Lipstics",
        price: 2099.000,
        image: Lipstics,
        status: "hot",
      },
      {
        id: 3,
        name: "Loeral-Cosmetics",
        price: 7199.000,
        image: cosmetics,
        status: "hot",
      },
      {
        id: 4,
        name: "Unsticted-Shirts",
        price: 8000.000,
        image: cloths,
        status: "new",
      },
      {
        id: 5,
        name: "Shoes-Sweater",
        price: 9099,
        image: shoe1,
        status: "hot",
      },
      {
        id: 6,
        name: "Shoes-Shirt",
        price: 4000,
        image: shoe2,
        status: "new",
      },
      {
        id: 7,
        name: "Shoes-Jeans",
        price: 9000,
        image: shoe3,
        status: "hot",
      },
      {
        id: 8,
        name: "Jeans-Glasses",
        price: 5000,
        image: shoe4,
        status: "hot",
      }
     
    ]
   );
  return (
    <ProductsContext.Provider value={{products: [...products]}}>{props.children}</ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
