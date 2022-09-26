import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login/Login";
import Profil from "./pages/Profil/Profil";
import RedirectAfterLog from "./pages/RedirectAfterLog";
import RefreshToken from "./pages/RefreshToken";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Switch>
                    <Route path="/refresh-token">
                        <RefreshToken />
                    </Route>
                    <Route path="/profile">
                        <Profil />
                    </Route>
                    <Route path="/callback">
                        <RedirectAfterLog />
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
