import React, { useState } from "react";
import "../styles/Listings.scss"
import { categories } from "../data";
import loader from "./Loader"
import { useDispatch, useSelector } from "react-redux";


const Listings = () => {
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(true)
    const [selectedcategory,setSelectedCategory] = useState("")
    const listings = useSelector((state)=> state.listings)
    const getFeedListngs= async()=>{
        try {
            const response = await fetch("http://localhost3001/properties ")
        } catch (err) {
            
        }
    }
  return (
    <div className="category-list">
      {categories?.map((category, index) => (
        <div className={`category`} key={index}>
          <div className="category_icon">{category.icon}</div>
          <p>{category.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Listings;
