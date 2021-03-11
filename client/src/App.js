import React, { Component} from 'react'
import Header from './components/Header.js'
import Sidebar from './components/Sidebar.js'


import firebase from 'firebase'


function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
    </div>
  );
}

export default App;
