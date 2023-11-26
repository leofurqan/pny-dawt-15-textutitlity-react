import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light')

  const handleModeChange = () => {
    if(mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#0d0d0d'
    } else {
        setMode('light');
        document.body.style.backgroundColor = '#ffffff'
    }
}

  return (
    <>
      <Navbar mode={mode} modeChange={handleModeChange}/>
      <TextForm mode={mode} />
    </>
  );
}

export default App;
