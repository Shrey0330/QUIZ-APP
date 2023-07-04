import React from "react";
import Navbar from "./Navbar/Navbar";
import homeStyle from "./Home.module.css";
import Hero from "./Hero/Hero";
import Catagory from "./Catagory/Catagory.js";
import Login from "../Login/Login";
export default function Home({user, setQuizData}) {
  return (
    <div>
      {/* <div>{user?.email}</div> */}
          <Navbar />
          <Hero />
          <Catagory setQuizData = {setQuizData}/>
    </div>
  );
}

// <Navbar/>
// <Hero/>
// <Catagory/>
