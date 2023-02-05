import React, { useContext } from 'react'
import { QuizContext } from '../Contexts/Contexts'
import {Questions} from '../QuestionsList/QuestionList'
const EndScreen = () => {

  const{score,setGameState,setScore,username}=useContext(QuizContext);
  const restartquiz=()=>{
    setScore(0);
    setGameState('menu');

  }
  return (
    <>
    <div className='Quiz'>
    <h2>Congratulations {username}!!</h2>  
    <h3>Your score is {score}/{Questions.length}</h3>
    <button onClick={restartquiz}>restart quiz</button>
    </div>
      
    </>
  )
}

export default EndScreen
