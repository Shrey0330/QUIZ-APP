import React, { useState } from 'react'
import styles from './Catagory.module.css';
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function SingleCatagory({category, number, setQuizData}) {
    // const [quizData, setquizData] = useState([]);
    const navigate = useNavigate();
    const goToQuiz = async () => {
        console.log(number);
        const str = category;
        console.log(typeof(category));
        const result = await fetch(`http://localhost:8080/quiz?category="${str}"`, {
          method : "GET",
          mode : 'cors',
          headers: {
            accept: 'application/json',
            'Access-Control-Allow-Credentials': true
          },
        });
        console.log(result);
        const data = await result.json();
        console.log(data);
        setQuizData(data);
        navigate('/quiz')
    }
  return (
    <Paper elevation={9} className={styles.container2} component='div' onClick={goToQuiz}>
        <div style={{fontSize : '20px', fontWeight : 'bolder', textAlign : 'center'}}>Catagory</div>
        <div style={{fontSize : '33px', fontWeight : 'bolder', textAlign : 'center'}}>{category}</div>

    </Paper>
  )
}
