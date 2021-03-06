import React, { useState, useEffect } from 'react';
import './App.css';
import LoginSignup from './components/User/LoginSignup';
import EntryForm from './components/Journal/EntryForm';
import TenYear from './components/Journal/TenYear';
import RecentEntries from './components/Journal/RecentEntries';
import {Route} from 'react-router-dom'
import UserRegister from './components/User/UserRegister';
import UserLogin from './components/User/UserLogin';
import EditEntry from './components/Journal/EditEntry';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [id, setId] = useState()
  const [entries, setEntries] = useState([])
  const [welcome, setWelcome] = useState()
  useEffect(()=>{
    notify()
  },[welcome])


  toast.configure()
  const notify = () => toast(welcome);

  console.log('id', id)
  console.log('welcome', welcome)


  
  return (
    <div className="App">
      <Route exact path='/' component={LoginSignup}/>
      <Route path='/user-register'  render={(props) => <UserRegister {...props} setId={setId} />} />
      <Route path='/recent' render={(props) => <RecentEntries {...props} id={id} setEntries={setEntries} entries={entries} />}/>
      <Route path='/create' render={(props) => <EntryForm {...props} id={id}/> }/>
      <Route path='/edit/:id' render={(props) => <EditEntry {...props} id={id} />} />
      <Route path='/full' render={(props) => <TenYear {...props} id={id} setEntries={setEntries} entries={entries} />}/>
      <Route path='/user-login'  render={(props) => <UserLogin notify={notify} {...props} setId={setId} welcome={welcome} setWelcome={setWelcome} />}/>
    </div>
  );
}

export default App;
