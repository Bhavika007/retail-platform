import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import Profile from './pages/profile/profile.component'
import Wishlist from './pages/wishlist/wishlist.component'
import Cart from './pages/cart/cart.component'
import { Route,Switch } from 'react-router-dom';
import {Header} from './components/header/header.component'


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/wishlist' component={Wishlist}/>
      </Switch>
    </div>
  );
}

export default App;
