import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import store from '../store'
import Main from '../components/Main';
import './App.css';
import _ from 'lodash';

class App extends Component {
  render() {

    const { contacts, user, activeUserId } = store.getState();

    return (
      <div className="App">
        <Sidebar contacts={_.values(contacts)} />
        <Main user={user} activeUserId={activeUserId} />
      </div>
    );
  }
}

export default App;
