// import './App.css';
// import './Ethereum';
import Definition from './Definition';
import { useEffect, useState } from 'react'

function App() {

  const tommy = { address: '0x123' }
  const becca = { address: '0x456' }

  const [word, setWord] = useState({
    name: "fish",
    bounty: '0.00003',
    definitions: [
      {
        name: "ocean animal with fins",
        score: 8,
        user: becca
      },
      {
        name: "waterboi",
        score: 6,
        user: tommy
      }
    ]
  })

  const upvoteScore = (user) => {
    let newDefinitions = []

    for (let i = 0; i < word.definitions.length; i++) {
      const definition = word.definitions[i]
      if (definition.user === user) {
        definition.score += 1
        newDefinitions.push(definition)
      } else {
        newDefinitions.push(definition)
      }
    }

    newDefinitions = newDefinitions.sort((a, b) => {
      return b.score - a.score
    })

    console.log(newDefinitions)

    setWord({ definitions: newDefinitions , ...word})
  }

  useEffect(() => {
    console.log(word)
  })

  return (
    <div className="App">
      <h1>Fish</h1>
      { word.definitions.map((defn) => <Definition name={defn.name} score={defn.score} user={defn.user} onClick={upvoteScore} />) }

    </div>
  );
}

export default App;
