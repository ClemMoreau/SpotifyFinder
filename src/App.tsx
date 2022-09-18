import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import { QueryClient, QueryClientProvider } from 'react-query'
import RedirectAfterLog from './pages/RedirectAfterLog';
import Profil from './pages/Profil/Profil';

const queryClient = new QueryClient();


function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path='/profile'>
            <Profil />
          </Route>
            <Route path="/callback">
                <RedirectAfterLog/>
            </Route>
              <Route path="/" exact> 
                <Login />
              </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
