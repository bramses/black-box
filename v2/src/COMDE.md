# App.js -- low temperature: Javascript


This code is looping through the word.definitions array and adding a to the score of the newDefinitions array if it matches the user's name.

```
const newDefinitions = []

    for (let i = 0; i < word.definitions.length; i++) {
      const definition = word.definitions[i]
      if (definition.user === user) {
        definition.score += 1
        newDefinitions.push(definition)
      } else {
        newDefinitions.push(definition)
      }
    }

    setWord({ definitions: newDefinitions , ...word})
```
# App.js -- low temperature: Javascript

This code is creating a list of definitions and then mapping over the list to create a new list of Definition objects. The map function takes an array as its first argument and applies the function passed in as its second argument to each element in the array.

```
word.definitions.map((defn) => <Definition name={defn.name} score={defn.score} user={defn.user} onClick={upvoteScore} />)
```
