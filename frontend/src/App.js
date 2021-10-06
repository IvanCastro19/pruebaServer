import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navegation from './components/Navegation'
import CraeteUser from './components/CraeteUser'
import CreateNote from './components/CreateNote'
import NotesList from './components/NoteList'

function App() {
  return (
    <Router>
      <div>
        <Navegation />
        <div className="container p-4">
          <Route path="/" exact component={NotesList} />
          <Route path="/edit/:id" component={CreateNote} />
          <Route path="/create" component={CreateNote} />
          <Route path="/user" component={CraeteUser} />
        </div>
      </div>
    </Router>
  );
}

export default App;
