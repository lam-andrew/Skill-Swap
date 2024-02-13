import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import PageHeader from './components/PageHeader';

function App() {
  return (
    <BrowserRouter>
      <div className='App bg-slate-grey h-screen'>
        <PageHeader />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
