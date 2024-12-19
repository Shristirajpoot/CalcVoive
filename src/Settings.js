import React, { useState } from 'react';
import './Set.css';

const Settings = ({ theme, setTheme, voiceFeedback, setVoiceFeedback, decimalPrecision, setDecimalPrecision }) => {
  const [newTheme, setNewTheme] = useState(theme); // Track theme selection before saving
  const [newVoiceFeedback, setNewVoiceFeedback] = useState(voiceFeedback);
  const [newDecimalPrecision, setNewDecimalPrecision] = useState(decimalPrecision);

  // Save settings to localStorage and immediately apply them
  const handleSaveSettings = () => {
    // Update state
    setTheme(newTheme);
    setVoiceFeedback(newVoiceFeedback);
    setDecimalPrecision(newDecimalPrecision);

    alert('Settings saved successfully!');
  };

  return (
    <div className="Setting-page">
      <div className="Setting">
        <h2>Settings</h2>

        <h3>Voice Feedback</h3>
        <label>
          <input
            type="checkbox"
            checked={newVoiceFeedback}
            onChange={(e) => setNewVoiceFeedback(e.target.checked)}
          />
          Enable Voice Feedback
        </label>

        <h3>Theme Options</h3>
        <label>
          <input
            type="radio"
            name="theme"
            value="light"
            checked={newTheme === 'light'}
            onChange={(e) => setNewTheme(e.target.value)} // Change the theme in local state
          />
          Light Mode
        </label>
        <label>
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={newTheme === 'dark'}
            onChange={(e) => setNewTheme(e.target.value)} // Change the theme in local state
          />
          Dark Mode
        </label>

        <h3>Decimal Precision</h3>
        <label>
          <input
            type="number"
            value={newDecimalPrecision}
            min="0"
            max="10"
            onChange={(e) => setNewDecimalPrecision(e.target.value)}
          />
          Number of Decimal Places
        </label>

        <button onClick={handleSaveSettings}>Save Settings</button>
      </div>
    </div>
  );
};

export default Settings;
