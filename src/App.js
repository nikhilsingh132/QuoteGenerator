import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
function App() {
  const [advice, setadvice] = useState('');
  function fetchdata() {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        console.log(response.data.slip.advice);
        setadvice(response.data.slip.advice)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <>
      <div className='app'>
        <div className='card'>
          <div className='heading'>{advice}</div>
          <button className='button' onClick={fetchdata}>
            <span>Click for Advice</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
