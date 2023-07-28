import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log); //The line is used to send performance metrics (LCP, CLS, FID, and others) to Google Analytics or other analytics tools.