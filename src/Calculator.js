import React, { useState, useEffect } from 'react';
import './Calc.css';

// Initialize SpeechRecognition API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US';

const Calculator = ({ voiceFeedback, decimalPrecision }) => {
  const [display, setDisplay] = useState('');
  const [history, setHistory] = useState([]); // Store calculation history

  // Append to display
  const appendToDisplay = (value) => {
    setDisplay(display + value);
  };

  // Clear display
  const clearDisplay = () => {
    setDisplay('');
    if (voiceFeedback) {
      speak('Cleared');
    }
  };

  // Delete last character
  const deleteLast = () => {
    setDisplay(display.slice(0, -1));
    if (voiceFeedback) {
      speak('Deleted last character');
    }
  };

  // Calculate the expression with decimal precision
  const calculate = () => {
    try {
      let expression = display;

      // Replace advanced functions with corresponding JavaScript functions
      expression = expression.replace(/sin\s*(\d+(\.\d*)?)/g, (match, p1) => `Math.sin(${p1})`);
      expression = expression.replace(/cos\s*(\d+(\.\d*)?)/g, (match, p1) => `Math.cos(${p1})`);
      expression = expression.replace(/tan\s*(\d+(\.\d*)?)/g, (match, p1) => `Math.tan(${p1})`);
      expression = expression.replace(/√\s*(\d+(\.\d*)?)/g, (match, p1) => `Math.sqrt(${p1})`);
      expression = expression.replace(/\^/g, '**'); // Replace '^' with '**' for power operations

      const result = eval(expression); // Evaluate the expression
      const roundedResult = parseFloat(result).toFixed(decimalPrecision);

      setDisplay(roundedResult);
      // Save the calculation history
      setHistory(prevHistory => [...prevHistory, { expression: display, result: roundedResult }]);

      if (voiceFeedback) {
        speak(roundedResult);
      }
    } catch (error) {
      setDisplay('Error!');
      if (voiceFeedback) {
        speak('Error');
      }
    }
  };

  // Start voice recognition
  const startVoiceRecognition = () => {
    recognition.start();
  };

  // Handle the result of voice recognition
  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    console.log('Command: ', command);

    if (command.includes('clear') || command.includes('reset')) {
      clearDisplay();
    } else if (command.includes('delete last') || command.includes('remove last')) {
      deleteLast();
    } else {
      // If it’s a valid mathematical expression
      setDisplay(command);
      try {
        const result = eval(command);
        setDisplay(result);
        if (voiceFeedback) {
          speak(result);
        }
      } catch (error) {
        setDisplay('Error!');
        if (voiceFeedback) {
          speak('Error');
        }
      }
    }
  };

  // Optional: Handling errors in speech recognition
  recognition.onerror = (event) => {
    setDisplay('Error with voice recognition!');
    if (voiceFeedback) {
      speak('Error with voice recognition');
    }
  };

  // Speak function for voice feedback
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="main-container">
      <div className="calculator-wrapper"><h1 
  style={{
    fontSize: '32px',
    color: '#ffffff',
    background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Gradient effect
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent', // Makes the gradient visible
    marginBottom: '20px',
    textTransform: 'uppercase',
    fontWeight: '900',
    letterSpacing: '3px',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',zIndex:'1',opacity:'0.4',// Subtle shadow for depth
  }}
>
  CalcVoice
</h1>

        <div className="calculator">
          <input type="text" value={display} disabled />
          <div className="buttons">
            <button onClick={clearDisplay}>C</button>
            <button onClick={deleteLast}>DEL</button>
            <button onClick={() => appendToDisplay('%')}>%</button>
            <button onClick={() => appendToDisplay('/')}>/</button>
            <button onClick={() => appendToDisplay('7')}>7</button>
            <button onClick={() => appendToDisplay('8')}>8</button>
            <button onClick={() => appendToDisplay('9')}>9</button>
            <button onClick={() => appendToDisplay('*')}>*</button>
            <button onClick={() => appendToDisplay('4')}>4</button>
            <button onClick={() => appendToDisplay('5')}>5</button>
            <button onClick={() => appendToDisplay('6')}>6</button>
            <button onClick={() => appendToDisplay('-')}>-</button>
            <button onClick={() => appendToDisplay('1')}>1</button>
            <button onClick={() => appendToDisplay('2')}>2</button>
            <button onClick={() => appendToDisplay('3')}>3</button>
            <button onClick={() => appendToDisplay('+')}>+</button>
            <button onClick={() => appendToDisplay('0')}>0</button>
            <button onClick={() => appendToDisplay('.')}>.</button>
            <button onClick={calculate}>=</button>

            {/* Advanced Function Buttons */}
            <button onClick={() => appendToDisplay('√')}>√</button>
            <button onClick={() => appendToDisplay('^')}>^</button>
            <button onClick={() => appendToDisplay('sin')}>sin</button>
            <button onClick={() => appendToDisplay('cos')}>cos</button>
            <button onClick={() => appendToDisplay('tan')}>tan</button>
          </div>

          {/* History Section */}
          <div className="history">
            <h3>History</h3>
            {history.length > 0 ? (
              <ul>
                {history.slice(-5).map((item, index) => (
                  <li key={index}>
                    {item.expression} = {item.result}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No history yet</p>
            )}
          </div>

          {/* Voice Command Button */}
          <button className="voice-button" onClick={startVoiceRecognition}>🎤 Voice Command</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
