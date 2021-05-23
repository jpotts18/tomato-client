import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Navbar from './components/NavBar';
import Login from './containers/Login';
import Register from './containers/Register';
import './App.css';
import ForgotPassword from './containers/ForgotPassword';

function App() {

  // const [token, setToken] = useState();

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot" component={ForgotPassword} />
      </Switch>
    </>
  );
}

export default App;
