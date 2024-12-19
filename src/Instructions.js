import React from 'react';
import './Instr.css';

const Instructions = () => {
  return (
    <div className="instructions-page">
      <div className="instructions">
        <h1>Instructions</h1>
        <h2>Using the Voice-Controlled Calculator</h2>
        <p>To use the calculator, you can either type using the buttons or speak your commands.</p>

        <h3>Voice Commands</h3>
        <ul>
          <li>"Clear" or "Reset" – Clears the display</li>
          <li>"Delete last" or "Remove last" – Deletes the last entered digit</li>
          <li>Basic Math – "Five plus five", "Seven times eight", "Twenty divided by four", etc.</li>
        </ul>

        <h3>Note</h3>
        <p>The calculator will process basic arithmetic commands and display the result. Speak clearly for better accuracy.</p>
      </div>
    </div>
  );
};

export default Instructions;
