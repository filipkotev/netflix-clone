import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Signin, Signup, Browse } from './pages/pageIndex';

function App() {
  const user = {}; // check if user is authenticated - firebase related

  return (
    <Router>
      <Routes>
        <Route user={user} path={user ? ROUTES.BROWSE : ROUTES.SIGN_IN} element={<Signin />}/>
        <Route user={user} path={user ? ROUTES.BROWSE : ROUTES.SIGN_UP} element={<Signup />}/>
        <Route user={user} path={ROUTES.HOME} element={<Home/>}/>
        <Route user={user} exact path={user ? ROUTES.SIGN_IN : ROUTES.BROWSE} element={<Browse user={user}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
