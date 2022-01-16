import './index.css';
import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import VideoStore from "./store/VideoStore";



export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    video: new VideoStore()
  }}>
    <App />
  </Context.Provider>,
document.getElementById('root')
);