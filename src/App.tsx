import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPageRouter from './pages/DetailPage/DetailPageRouter';
import LoginPageRouter from './pages/AuthPage/LoginPageRouter';
import YesNoPageRouter from './pages/YesNoPage/YesNoPageRouter';
import ResultPageRouter from './pages/ResultPage/ResultPageRouter';
import AdminRouter from './pages/AdminPage/AdminRouter';

function App() {
  return (
    <>
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={DetailPageRouter} path="/shop" />
        <Route component={LoginPageRouter} path="/auth" />
        <Route component={YesNoPageRouter} path="/yesno" />
        <Route component={ResultPageRouter} path="/result" />
        <Route component={AdminRouter} path="/admin" />
      </Switch>
    </>
  );
}

export default App;
