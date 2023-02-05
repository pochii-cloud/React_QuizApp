import React,{useContext} from 'react'
import { QuizContext } from '../Contexts/Contexts'

const MainMenu = () => {

    const {gamestate,setGameState}=useContext(QuizContext)
  return (
    <>
       <div className='Menu'>
        <button onClick={()=>setGameState('quiz')}>start quiz</button>
       </div>
    </>
  )
}

export default MainMenu
