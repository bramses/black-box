import Definition from './Definition';
import { useState } from 'react'
import './App.css'

function App() {


  // users -> from json

  const tommy = { address: '0x123' }
  const becca = { address: '0x456' }


  // word.js

  const [word, setWord] = useState({
    name: "fish",
    bounty: '0.00003',
    definitions: [
      {
        name: "waterboi",
        score: 6,
        user: tommy
      },
      {
        name: "ocean animal with fins",
        score: 8,
        user: becca
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

    setWord({ definitions: [...newDefinitions], ...word })
    changeBounty()
  }

  const downvoteScore = (user) => {
    let newDefinitions = []

    for (let i = 0; i < word.definitions.length; i++) {
      const definition = word.definitions[i]
      if (definition.user === user) {
        definition.score -= 1
        newDefinitions.push(definition)
      } else {
        newDefinitions.push(definition)
      }
    }

    setWord({ definitions: [...newDefinitions], ...word })
    changeBounty()
  }

  // bounty.js
  const [bounty, setBounty] = useState(word.definitions.reduce((accumulator, defn) => accumulator + defn.score, 0) / 1000) 

  const changeBounty = () => {
    const totalVotes = word.definitions.reduce((accumulator, defn) => accumulator + defn.score, 0)
    setBounty(totalVotes / 1000)
  }

  return (
    <div className="App">
      <div className="App-header">black box</div>
      <h1>Fish (asked by @curiouscrustacean)</h1>
      <p><b>bounty: {bounty} DAI/mo</b></p>
      <hr />
        {word.definitions.sort((a, b) => {
          return b.score - a.score
        }).map((defn) => (<><Definition name={defn.name} score={defn.score} user={defn.user} upvote={upvoteScore} downvote={downvoteScore} /><hr /></>))}
    </div>
  );
}

export default App;
