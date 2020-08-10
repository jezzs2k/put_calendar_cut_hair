import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './component/layout/Navbar';
import FormCalendar from './component/calendar/form_calendar';

import AuthState from './context/AuthContext/authState'

const App = () => {
  return (
    <AuthState>
      <Router>
        <div className='App'>
          <div className='header'>
            <Navbar />
          </div>
          <div className='body'>
            <FormCalendar />
          </div>
        </div>
      </Router>
    </AuthState>

  );
};

export default App;
