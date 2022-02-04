import React from 'react';
import './App.scss';
import CounterComponent from './components/counter/counter.component';
import TodoComponent from './components/todo/todo.component';

function App() {
  return (
    <div className="App">
      <CounterComponent />
      <TodoComponent />
    </div>
  );
}

export default App;
