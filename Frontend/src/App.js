import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/')
    .then(response => {
      setMessage(response.data);
    })
    .catch(error => {
      console.error('There was an error fecthng the data!', error);
    });
  }, []);
  return (
    <div >
      <h1 className='text-black'>hello world!</h1>
     <p>{message}</p>
    </div>
  );
}

export default App;
