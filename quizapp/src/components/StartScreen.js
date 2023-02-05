import React, { useContext } from 'react'
import { QuizContext } from '../Contexts/Contexts'

const StartScreen = () => {

    const{username,setUsername,setGameState}=useContext(QuizContext)

    const submitfunction=(e)=>{
        e.preventDefault()
        setGameState('menu')
    }
  return (
    <div className='Quiz' onSubmit={submitfunction}>
        <form>
            <input type='text' placeholder='enter username' required onChange={
                (e)=>{
                    setUsername(e.target.value)
                    console.log(username)
                }
            }/>
            <button>Submit</button>
        </form>
      
    </div>
  )
}

export default StartScreen
