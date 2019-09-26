import React, { useState } from 'react';
import './App.css';
import LoginSignup from './components/User/LoginSignup';
// import Profile from './components/User/Profile';
import EntryForm from './components/Journal/EntryForm';
import TenYear from './components/Journal/TenYear';
import RecentEntries from './components/Journal/RecentEntries';
import {Route} from 'react-router-dom'
import UserRegister from './components/User/UserRegister';
import UserLogin from './components/User/UserLogin';
import EditEntry from './components/Journal/EditEntry';

function App() {
  const [id, setId] = useState()
  
  console.log('id', id)
  
  return (
    <div className="App">
      <Route exact path='/' component={LoginSignup}/>
      <Route path='/user-register'  render={(props) => <UserRegister {...props} setId={setId} />} />
      <Route path='/recent' render={(props) => <RecentEntries {...props} id={id}/>}/>
      <Route path='/create' render={(props) => <EntryForm {...props} id={id}/>}/>
      <Route path='/edit/:id' render={(props) => <EditEntry {...props} id={id} />} />
      <Route path='/full' render={(props) => <TenYear {...props} id={id}/>}/>
      <Route path='/user-login'  render={(props) => <UserLogin {...props} setId={setId} />}/>
  
      {/* <Route path='/users/:id' component={Profile}/> stretch goal*/} 
    </div>
  );
}

export default App;
