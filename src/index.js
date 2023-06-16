import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Main from './vrscene'




// import VRScene from './vrscene';

// ReactDOM.render(<App />, document.getElementById('root'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Main />
  </React.StrictMode>
);

