import React, { useState } from 'react';
import Number from './Number';
import Operation from './Operation';
import Screen from './Screen';
import './Calculator.css';


const DEFAULT_VALUE = '0';

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState(DEFAULT_VALUE);
  const [prevValue, setPrevValue] = useState(DEFAULT_VALUE);
  const [operation, setOperation] = useState(null);

  const computeResult = () => {
    let result;
    switch (operation) {
      case '+':
        result = parseFloat(prevValue) + parseFloat(currentValue);
        break;
      case '-':
        result = parseFloat(prevValue) - parseFloat(currentValue);
        break;
      case 'x':
        result = parseFloat(prevValue) * parseFloat(currentValue);
        break;
      case '/':
        if (parseFloat(currentValue) === 0) {
          alert("Division by zero is not allowed.");
          return null;
        }
        result = parseFloat(prevValue) / parseFloat(currentValue);
        break;
      default:
        return null;
    }
    return result;
  };

  const handleNumberClick = (number) => {
   
    if (['+', '-', 'x', '/'].includes(currentValue)) {
      setCurrentValue(String(number));
    } else {
      setCurrentValue(prev => prev === DEFAULT_VALUE ? String(number) : prev + number);
    }
  };

  const handleOperationClick = (op) => {
    switch (op) {
      case 'clear':
        setCurrentValue(DEFAULT_VALUE);
        setPrevValue(DEFAULT_VALUE);
        setOperation(null);
        break;
      case '=':
        const result = computeResult();
        if (result !== null) {
          setCurrentValue(result.toString());
          setPrevValue(DEFAULT_VALUE);
          setOperation(null);
        }
        break;
      default:
        setPrevValue(currentValue);
        setCurrentValue(op);
        setOperation(op);
    }
  };

  return (
    <div className="Calculator">
      <Screen value={currentValue} />
      <div className="Buttons">
        <div className="NumberButtons">
          <Number value={7} onClick={() => handleNumberClick(7)} />
          <Number value={8} onClick={() => handleNumberClick(8)} />
          <Number value={9} onClick={() => handleNumberClick(9)} />
          <Number value={4} onClick={() => handleNumberClick(4)} />
          <Number value={5} onClick={() => handleNumberClick(5)} />
          <Number value={6} onClick={() => handleNumberClick(6)} />
          <Number value={1} onClick={() => handleNumberClick(1)} />
          <Number value={2} onClick={() => handleNumberClick(2)} />
          <Number value={3} onClick={() => handleNumberClick(3)} />
          <Number value={0} onClick={() => handleNumberClick(0)} />
        </div>
        <div className="OperationButtons">
          <Operation value="clear" onClick={() => handleOperationClick("clear")} />
          <Operation value="/" onClick={() => handleOperationClick("/")} />
          <Operation value="x" onClick={() => handleOperationClick("x")} />
          <Operation value="-" onClick={() => handleOperationClick("-")} />
          <Operation value="+" onClick={() => handleOperationClick("+")} />
          <Operation value="=" onClick={() => handleOperationClick("=")} />
        </div>
      </div>
    </div>
);
  };

export default Calculator;
