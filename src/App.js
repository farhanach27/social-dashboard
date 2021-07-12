import React,{useState, useEffect} from 'react';
import {Route, withRouter} from 'react-router-dom';
import UserStats from './components/UserStats'
import Login from './components/Login';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

const App =(props) => {
  const [loggedIn, setLoggedIn ] = useState(false)


  const handleAuth = () =>{
    setLoggedIn(!loggedIn)
  }

  useEffect (() => {
    if(localStorage.getItem('id')){
      handleAuth()
    }
  }, [])

  return (
    <div className="container App">
      {loggedIn ? <UserStats handleAuth={handleAuth} loggedIn={loggedIn}/> : < Login handleAuth={handleAuth} />}

      
      <Route path='/profile' component={UserStats} exact={true}/>
      
    </div>
  );
}

export default withRouter(App);