import logo from './logo-spotify.jpeg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './Login';
import { QueryClient, QueryClientProvider } from 'react-query'
import RedirectAfterLog from './RedirectAfterLog';

const queryClient = new QueryClient();

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/callback">
              <RedirectAfterLog/>
          </Route>
          <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <div>
                  </div>
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
    </QueryClientProvider>
  );
}

export default App;
