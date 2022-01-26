import React, {useEffect, useState} from 'react';
import NameItem from './components/NameItem';
import './App.css';

function App() {
    const [activeName, setActiveName] = useState("");

    useEffect(() => {
        console.log("We gaan beginnen! 🤓")
    }, []);

  return (
    <>
      <h1>Het laatste rondje is gegeven door: {activeName}</h1>
      <ul>
        <NameItem key="henk" name="Henk" activeName={activeName} setActiveName={setActiveName}/>
        <NameItem key="piet" name="Piet" activeName={activeName} setActiveName={setActiveName}/>
        <NameItem key="jan" name="Jan" activeName={activeName} setActiveName={setActiveName}/>
      </ul>
    </>
  );
}

export default App;
