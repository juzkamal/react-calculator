// src/Calculator.js
import React, { useState } from 'react';
import Button from '../components/Button';
import '../css/Calculator.css'; 

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => {
        if (prev === 'Error') {
            return value;
        }
        return prev + value;
    });
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <>
    <div className="calculator">
        <input 
        type="text" 
        className="display" 
        value={input} 
        readOnly 
      />
      <div className="buttons">
        <button className="button" onClick={handleClear}>C</button>
        <Button number="/" onClick={handleButtonClick} />
        <Button number="*" onClick={handleButtonClick} />
        <Button number="-" onClick={handleButtonClick} />
        <Button number="7" onClick={handleButtonClick} />
        <Button number="8" onClick={handleButtonClick} />
        <Button number="9" onClick={handleButtonClick} />
        <Button number="+" className="row-span" onClick={handleButtonClick} />
        <Button number="4" onClick={handleButtonClick} />
        <Button number="5" onClick={handleButtonClick} />
        <Button number="6" onClick={handleButtonClick} />
        <Button number="1" onClick={handleButtonClick} />
        <Button number="2" onClick={handleButtonClick} />
        <Button number="3" onClick={handleButtonClick} />
        <Button number="0" onClick={handleButtonClick} />
        <Button number="." className="row-span" onClick={handleButtonClick} />
        <button className="button column-span"  onClick={handleCalculate}>=</button>
        
      </div>
    </div>
    </>
  );
};

export default Calculator;
