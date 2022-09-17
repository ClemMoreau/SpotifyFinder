import logo from './logo-spotify.jpeg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './Login';

function App() {
 
  return (
    <Router>
      <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                
                <a
                  className="App-link"
                  href="/login"
                >
                  Log to Spotify
                </a>
              </header>
            </div>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
