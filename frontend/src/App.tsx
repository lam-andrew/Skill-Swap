import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import PageHeader from './components/PageHeader';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <PageHeader />
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <p className='m-50'>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
