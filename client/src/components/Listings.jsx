import React, { useEffect, useState } from "react";
import "../styles/Listings.scss";
import { categories } from "../data";
import loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { setListings } from "../redux/state";

const Listings = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [selectedcategory, setSelectedCategory] = useState("All");
  const listings = useSelector((state) => state.listings);

  const getFeedListings = async () => {
    try {
      const response = await fetch(
        selectedcategory !== "All"
          ? `http://localhost:3001/properties?category=${selectedcategory}`
          : "http://localhost:3001/properties",
        {
          method: "GET",
        }
      );

      const data = await response.json();
      dispatch(setListings({ listings: data }));
      setLoading(false);
    } catch (err) {
      console.log("Fetch Listings Failed", err.message);
    }
  };

  useEffect(()=>{
    getFeedListings()
  },[selectedcategory])

  console.log(listings);
  
  return (
    <div className="category-list">
      {categories?.map((category, index) => (
        <div
          className={`category`}
          key={index}
          onClick={() => setSelectedCategory(category.label)}
        >
          <div className="category_icon">{category.icon}</div>
          <p>{category.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Listings;
