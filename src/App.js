import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (e) => {
    setInput(input + e.target.value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculate = () => {
    try {
      setResult(eval(input));  // WARNING: eval() can be unsafe; in real apps, use a safer parsing method
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} disabled />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={handleInput} value="1">1</button>
        <button onClick={handleInput} value="2">2</button>
        <button onClick={handleInput} value="3">3</button>
        <button onClick={handleInput} value="+">+</button>
        <button onClick={handleInput} value="4">4</button>
        <button onClick={handleInput} value="5">5</button>
        <button onClick={handleInput} value="6">6</button>
        <button onClick={handleInput} value="-">-</button>
        <button onClick={handleInput} value="7">7</button>
        <button onClick={handleInput} value="8">8</button>
        <button onClick={handleInput} value="9">9</button>
        <button onClick={handleInput} value="*">*</button>
        <button onClick={handleInput} value="0">0</button>
        <button onClick={handleInput} value="/">/</button>
        <button onClick={clearInput}>C</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
