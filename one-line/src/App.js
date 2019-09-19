import React from 'react';
import './App.css';
import LoginSignup from './components/User/LoginSignup';
import Profile from './components/User/Profile';
import EntryForm from './components/Journal/EntryForm';
import TenYear from './components/Journal/TenYear';
import RecentEntries from './components/Journal/RecentEntries';
import {Route} from 'react-router-dom'
import UserForm from './components/User/UserForm';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LoginSignup}/>
      <Route path='/user-form' component={UserForm}/>
      <Route path='/recent' component={RecentEntries}/>
      <Route path='/create' component={EntryForm}/>
      <Route path='/full' component={TenYear}/>
  
      {/* <Route path='/users/:id' component={Profile}/> stretch goal*/} 
    </div>
  );
}

export default App;
