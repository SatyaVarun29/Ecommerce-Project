import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets, products } from "../assets/frontend_assets/assets";
import Title from "../Components/Title";
import ProductItem from "../Components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowfilter] = useState(false);
  const [filterproducts, setFilterproducts] = useState([]);
  const [category, setCategory] = useState([]);

  const [subCategory, setsubCategory] = useState([]);

  const toggleChange = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubcategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setsubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setsubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = [...products]
    console.log(productsCopy);
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    if(subCategory.length>0){
      productsCopy=productsCopy.filter((item)=>subCategory.includes(item.subCategory))
    }
    setFilterproducts(productsCopy)
  };

  

  useEffect(() => {
    applyFilter();
  }, [category,subCategory]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowfilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/* category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                onChange={toggleChange}
                value={"Men"}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                onChange={toggleChange}
                value={"Women"}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                onChange={toggleChange}
                value={"Kids"}
              />{" "}
              Kids
            </p>
          </div>
        </div>
        {/* subcategory filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                onChange={toggleSubcategory}
                className="w-3"
                type="checkbox"
                value={"Topwear"}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleSubcategory}
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleSubcategory}
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* product sort */}
          <select className="border-2 border-gray-300 text-sm px-2">
            <option value="relavent">sort by:Relavent</option>
            <option value="low to high">sort by:Low to High</option>
            <option value="high to low">sort by:High to Low</option>
          </select>
        </div>

        {/* map products */}
        <div className="grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterproducts.map((item) => (
            <ProductItem
              key={item._id}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
