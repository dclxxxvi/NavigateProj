import React, {useContext, useEffect, useState} from 'react';
import Header from './components/header/header'
import Main from './components/main/main'
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import './App.css';


const App = observer(() => {
    const {video} = useContext(Context)
    return (
      <div className="App">
      <Header />
      <Main />
    </div>
    );
});

export default App;