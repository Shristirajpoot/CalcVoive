import React, { useState, useEffect } from 'react';
import './styles.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Calculator from './Calculator';
import Instructions from './Instructions';
import Settings from './Settings';
import About from './About';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [voiceFeedback, setVoiceFeedback] = useState(localStorage.getItem('voiceFeedback') === 'true');
  const [decimalPrecision, setDecimalPrecision] = useState(Number(localStorage.getItem('decimalPrecision')) || 2);
  const [voiceType, setVoiceType] = useState(localStorage.getItem('voiceType') || 'female');

  // Apply theme changes
  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('voiceFeedback', voiceFeedback);
    localStorage.setItem('decimalPrecision', decimalPrecision);
  }, [voiceFeedback, decimalPrecision]);

  return (
    <Router>
      <div className={`app ${theme}`}>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/instructions">Instructions</Link></li>
              <li><Link to="/settings">Settings</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </header>

        <VoiceFeedback voiceType={voiceType} voiceFeedback={voiceFeedback} />
        <Routes>
          <Route path="/" element={<Calculator voiceFeedback={voiceFeedback} decimalPrecision={decimalPrecision} />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/settings" element={
            <Settings
              theme={theme}
              setTheme={setTheme}
              voiceFeedback={voiceFeedback}
              setVoiceFeedback={setVoiceFeedback}
              decimalPrecision={decimalPrecision}
              setDecimalPrecision={setDecimalPrecision}
            />
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

// Component to handle voice feedback
const VoiceFeedback = ({ voiceType, voiceFeedback }) => {
  const location = useLocation();

  useEffect(() => {
    if (voiceFeedback) {
      let page = location.pathname.replace('/', '') || 'home';
      const message = `This is ${page}`;
      speak(message, voiceType);
    }
  }, [location, voiceType, voiceFeedback]);

  const speak = (text, voiceType) => {
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    utterance.voice = voices.find((voice) =>
      voiceType === 'male' ? voice.name.includes('Male') : voice.name.includes('Female')
    );
    window.speechSynthesis.speak(utterance);
  };

  return null;
};

export default App;
