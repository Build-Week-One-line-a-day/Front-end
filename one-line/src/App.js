import React from 'react';
import './App.css';
import Login from './components/Login'
import JournalList from './components/JournalList'
import JournalForm from './components/JournalForm'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route path='/login' component={Login}/>
      <Route path='/list' component={JournalList}/>
      <Route path='/form' compoent={JournalForm}/>
    </div>
  );
}

export default App;
