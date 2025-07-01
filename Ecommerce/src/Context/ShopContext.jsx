import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowsearch] = useState(false);
  const [cartItems, setCartitems] = useState({});
  const navigate=useNavigate();
  console.log(cartItems);
  

  const addtocart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartitems(cartData);
  };

  const getcartcount = () => {
    let totalcount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalcount += cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalcount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;

    setCartitems(cartData);
  };

  const getcartTotal = () => {
    let totalAmount = 0;
    for (let items in cartItems) {
      let iteminfo = products.find((product) => product._id === items);
      for (let item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += iteminfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    showSearch,
    setSearch,
    setShowsearch,
    cartItems,
    addtocart,
    getcartcount,
    updateQuantity,
    getcartTotal,
    navigate,
  };
  console.log(products);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
