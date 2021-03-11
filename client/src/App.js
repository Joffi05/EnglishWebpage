import React, { Component} from 'react'
import Header from './components/Header.js'
import MakePost from './components/MakePost.js'
import firebase from 'firebase'


function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <MakePost/>
    </div>
  );
}

export default App;
