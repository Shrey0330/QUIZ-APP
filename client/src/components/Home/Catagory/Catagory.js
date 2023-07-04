import React from 'react'
import catagoryStyle from './Catagory.module.css';
import SingleCatagory from './SingleCatagory';
export default function Catagory({setQuizData}) {
  return (
    <div className={catagoryStyle.container}>

        <SingleCatagory setQuizData = {setQuizData} category = 'Animals' number = {27}/>
        <SingleCatagory setQuizData = {setQuizData} category = "Science: Computers" number = {18}/>
        <SingleCatagory setQuizData = {setQuizData} category = 'Science: Mathematics' number = {19}/>
        <SingleCatagory setQuizData = {setQuizData} category = 'Science: Gadgets' number = {30}/>


    </div>
  )
}
