import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';


function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log("error");
      });
  },[]);

  return (
    <div>
      <h1>Random Jokes</h1>
      {jokes.map((jokes,index) => (
        <div key={jokes.id}>
          <p>{jokes.title}</p>
          <p>{jokes.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
