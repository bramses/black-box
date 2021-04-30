import './App.css'
import Word from './Word'
import SuperfluidSDK from '@superfluid-finance/js-sdk';
// import './Ethereum'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Web3 = require('web3');


// users -> from json
const init = async () => {
  const sf = new SuperfluidSDK.Framework({
    web3: new Web3(window.ethereum),
  });
  await sf.initialize()
}


const tommy = { bounties: [], address: '0xA8f3447922d786045CB582B0C825723B744a54df' } 
const becca = { address: '0xA8f3447922d786045CB582B0C825723B744a54df', bounties: []}

const words = [
  {
    name: "Sunfish",
    bounty: 0.00003,
    users: [tommy, becca]
  },
  {
    name: "Seasonal Allergies",
    bounty: 0.00003,
    users: [becca, tommy]
  }
]


function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/fish">Fish</Link>
            </li>
            <li>
              <Link to="/word2">Word 2</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/fish">
            <Word name={words[0].name} users={words[0].users} />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
  )
}
export { words }
export default App;

  // return (
  //   <div className="App">
  //     <div className="App-header">black box</div>
  //     {words.map(word => (<div>
  //       <Word word={word.name} users={word.users} />
  //     </div>))}
  //   </div>
  // );