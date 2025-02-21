import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import AdminPanel from './components/AdminPanel';
import PurchaseRequest from './components/PurchaseRequest';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/admin" component={AdminPanel} />
        <Route path="/purchase-request" component={PurchaseRequest} />
      </Switch>
    </Router>
  );
}

export default App;