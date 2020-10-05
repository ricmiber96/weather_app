import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideMenu from './components/SideMenu'
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <div className="container-fluid h-100">
      <div className="row h-100">
        <SideMenu></SideMenu>
        <Main></Main>
      </div>
      </div>
    </div>
  );
}

export default App;
