import { useState } from 'react';
import './App.css';
import EndScreen from './components/EndScreen';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import StartScreen from './components/StartScreen';
import { QuizContext } from './Contexts/Contexts'

function App() {
  const [gamestate, setGameState] = useState('startscreen')
  const [score, setScore] = useState(0)
  const[username,setUsername]=useState('')

  return (
    <div className="App">
      <h3>Quiz App</h3>

      <QuizContext.Provider  value={{gamestate,setGameState,score,setScore,username,setUsername}}>
        {gamestate === 'startscreen' && <StartScreen/>}
        {gamestate === 'menu' && <MainMenu />}
        {gamestate === 'quiz' && <Quiz />}
        {gamestate === 'endscreen' && <EndScreen />}
      </QuizContext.Provider>


    </div>
  );
}

export default App;
