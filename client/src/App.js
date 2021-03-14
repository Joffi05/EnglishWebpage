import React, { Component} from 'react'
import Header from './components/Header.js'
import Sidebar from './components/Sidebar.js'
import ContentForm from './components/ContentForm.js'

function App() {

  const [search, setSearch] = React.useState(null)
  const [enter, setEnter] = React.useState(true)

  const FuncSearch = (data) => {
    setSearch(data)
  }

  const FuncEnter = (data) => {
    setEnter(data)
  }

  return (
    <div className="App">      
      <Header setSearch={FuncSearch} setEnter={FuncEnter}/>
      <Sidebar/>
      <ContentForm searchFor={search} enter={enter} setEnter={FuncEnter}/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
