import { useState } from 'react'

import './App.css'
import FlashCard from './components/FlashCard.jsx'

const App = () => {
  
  const questions = [{q: "Start", a: "Press the arrow to be quizzed!"},
                    {q:"What is grass type super effective on?", a: "Water, Ground, and Rock types"}, 
                    {q: "What is ghost type immune to?", a: "Normal and Fighting types"},
                    {q:"What type is immune to dragon?", a: "Fairy type"},
                    {q:"What is poison type not very effective against?", a:"Poison, Ground, Rock and Ghost types"},
                    {q: "What types are super effective against Steel?", a: "Fire, Fighting and Ground types"},
                    {q:"What types is Dragon resistant against?", a: "Fire, Grass, Water, Electric types"},
                    {q: "What is Bug type super effective on?", a: "Grass, Psychic and Dark types"},
                    {q: "What types are super effective against Flying?", a: "Electric, Rock and Ice types"},
                    {q: "What types is Fire resistant to?", a: "Fairy, Grass, Fire, Bug, Ice and Steel types"},
                    {q: "What types is Rock resistant to?", a: "Normal, Fire, Poison and Flying types"}
  ]
  
  const [number, setNumber] = useState(0);
  const randomQuestion = () => {
    setNumber(Math.floor(Math.random() * 10) + 1);}

  return (
    <>
    <div className="quiz">
      <h2> Pokemon Typing Quiz </h2>
      <h3> Test how well you know what is the best strategy!</h3>
      <h4> Cards: 10</h4>

      <FlashCard question={questions[number].q} answer={questions[number].a}/>
      <h2 className="button" onClick={randomQuestion}> Next </h2> 
    </div>

    </>
  )
}

export default App
