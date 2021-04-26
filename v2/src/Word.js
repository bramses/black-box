import Definition from './Definition';
import { useState } from 'react'
import './App.css'


function Word(props) {

  const [word, setWord] = useState({
    name: "fish",
    bounty: '0.00003',
    definitions: [
      {
        name: "waterboi",
        score: 6,
        user: props.users[0]
      },
      {
        name: "ocean animal with fins",
        score: 8,
        user: props.users[1]
      }
    ]
  })

  const [bounty, setBounty] = useState(word.definitions.reduce((accumulator, defn) => accumulator + defn.score, 0) / 1000) 

  const changeBounty = () => {
    const totalVotes = word.definitions.reduce((accumulator, defn) => accumulator + defn.score, 0)
    setBounty(totalVotes / 1000)
  }

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


    return (
        <div>
            <h1>{props.word} (asked by @curiouscrustacean)</h1>
            <p><b>bounty: {bounty} DAI/mo</b></p>
            <hr />
            {word.definitions.sort((a, b) => {
                return b.score - a.score
            }).map((defn) => (<><Definition name={defn.name} score={defn.score} user={defn.user} upvote={upvoteScore} downvote={downvoteScore} /><hr /></>))}
        </div>
    )
}

export default Word