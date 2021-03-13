import React, { Component} from 'react'
import Header from './components/Header.js'
import Sidebar from './components/Sidebar.js'
import ContentForm from './components/ContentForm.js'

function App() {

  const [search, setSearch] = React.useState(null)

  const FuncSearch = (data) => {
    setSearch(data)
  }


  return (
    <div className="App">      
      <Header setSearch={FuncSearch}/>
      <Sidebar/>
      <ContentForm searchFor={search}/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
