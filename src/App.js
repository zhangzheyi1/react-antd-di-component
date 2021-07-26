import './App.css';
import "./index.css";
import { Button, version } from "antd";
import DiInput from './biz-dumb/DiInput';
import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, onSearchLoading] = useState(false);
  const stInput = { title: { width: 0 }, input: { width: 200 }, inputSize: 'middle' };
  console.log('inputValue', inputValue);
  console.log('isLoading', isLoading);
  return (
    <div className="App">
      <h1>antd version: {version}</h1>
      <p>{inputValue}</p>
      <br />
      <DiInput pre required extraStyle={stInput} placeholder='请输入...' value={inputValue} onChange={e => setInputValue(e.target.value)}
        isSearch={true} onSearch={() => onSearchLoading(true)} loading={isLoading}/>
        <br/>
      <Button onClick={() => onSearchLoading(false)}>stop Loading</Button>
    </div>
  );
}

export default App;
