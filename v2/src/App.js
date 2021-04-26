import './App.css'
import Word from './Word'
// import './Ethereum'


function App() {

  // users -> from json

  const tommy = { address: '0x123' , monthlyPot: '$10' }
  const becca = { address: '0x456', monthlyPot: '$5' }

  const words = [{
    name : "Sunfish",
    users: [tommy, becca]
  }]
  

  return (
    <div className="App">
      <div className="App-header">black box</div>

      {words.map(word => (<div>
        <Word word={word.name} users={word.users} />
      </div>))}
    </div>
  );
}

export default App;
