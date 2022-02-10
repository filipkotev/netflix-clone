import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Signin, Signup, Browse } from './pages/pageIndex';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />}/>
        <Route exact path={ROUTES.BROWSE} element={<Browse />} />
        <Route exact path={ROUTES.SIGN_UP} element={<Signup />} />
        <Route exact path={ROUTES.SIGN_IN} element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
