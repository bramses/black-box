import './App.css'
import Word from './Word'
// import './Ethereum'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  // users -> from json

  const tommy = { address: '0x123' , monthlyPot: '$10', bounties: [] } // would this need to be server side?
  const becca = { address: '0x456', monthlyPot: '$5', bounties: [] }

  const words = [{
    name : "Sunfish",
    users: [tommy, becca]
  }]
  
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

  // return (
  //   <div className="App">
  //     <div className="App-header">black box</div>
  //     {words.map(word => (<div>
  //       <Word word={word.name} users={word.users} />
  //     </div>))}
  //   </div>
  // );
}

export default App;
