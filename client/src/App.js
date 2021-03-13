import React, { Component} from 'react'
import Header from './components/Header.js'
import Sidebar from './components/Sidebar.js'
import Footer from './components/Footer.js'
import ContentForm from './components/ContentForm.js'

function App() {
  return (
    <div className="App">      
      <Header/>
      <Sidebar/>
      <ContentForm/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
