import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import LoginSignup from './components/User/LoginSignup';
import UserRegister from './components/User/UserRegister';
import UserLogin from './components/User/UserLogin';
import EntryForm from './components/Journal/EntryForm';
import EditEntry from './components/Journal/EditEntry';
import RecentEntries from './components/Journal/RecentEntries';
import TenYear from './components/Journal/TenYear';

function App() {
  const [id, setId] = useState(null);
  const [entries, setEntries] = useState([]);
  const [welcome, setWelcome] = useState('');

  // Show a toast when welcome message changes
  useEffect(() => {
    if (welcome) {
      toast(welcome);
    }
  }, [welcome]);

  return (
    <div className="App">
      <ToastContainer />

      <Route exact path="/" component={LoginSignup} />

      <Route
        path="/user-register"
        render={(props) => <UserRegister {...props} setId={setId} />}
      />

      <Route
        path="/user-login"
        render={(props) => (
          <UserLogin
            {...props}
            setId={setId}
            setWelcome={setWelcome}
            welcome={welcome}
          />
        )}
      />

      <Route
        path="/recent"
        render={(props) => (
          <RecentEntries
            {...props}
            id={id}
            entries={entries}
            setEntries={setEntries}
          />
        )}
      />

      <Route
        path="/create"
        render={(props) => <EntryForm {...props} id={id} />}
      />

      <Route
        path="/edit/:id"
        render={(props) => <EditEntry {...props} id={id} />}
      />

      <Route
        path="/full"
        render={(props) => (
          <TenYear
            {...props}
            id={id}
            entries={entries}
            setEntries={setEntries}
          />
        )}
      />
    </div>
  );
}

export default App;
