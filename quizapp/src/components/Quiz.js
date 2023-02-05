import React, { useState,useContext} from 'react'
import { Questions } from '../QuestionsList/QuestionList';
import { QuizContext } from '../Contexts/Contexts';
const Quiz = () => {
  const[currentQuestion,setCurrentQuestion]=useState(0);
  const [optionchosen,setOptionChosen]=useState('');
  const {score,setScore,setGameState}=useContext(QuizContext)

  const nextquestion=()=>{
    if(Questions[currentQuestion].answer === optionchosen)
    {
      setScore(score+1);
      
    }
    alert(score);
  
    
    setCurrentQuestion(currentQuestion+1);

  }

  const finishQuiz=()=>{
    if(Questions[currentQuestion].answer === optionchosen)
    {
      setScore(score+1);
      
    }
    alert(score);
    setGameState('endscreen')
  }
  
  return (
    <div className='Quiz'>
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className='options'>
        <button onClick={()=>{setOptionChosen('optionA');}}>{Questions[currentQuestion].optionA}</button>
        <button onClick={()=>{setOptionChosen('optionB');}}>{Questions[currentQuestion].optionB}</button>
        <button onClick={()=>{setOptionChosen('optionC');}}>{Questions[currentQuestion].optionC}</button>
        <button onClick={()=>{setOptionChosen('optionC');}}>{Questions[currentQuestion].optionD}</button>
      </div>
      { currentQuestion === Questions.length-1?<button onClick={finishQuiz}>Finish Quiz</button>:
      <button onClick={nextquestion}>Next Question</button>}
      
    </div>
  )
}

export default Quiz
