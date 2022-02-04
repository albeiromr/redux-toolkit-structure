import React from 'react';
import './App.scss';
import CounterComponent from './components/counter/counter.component';
import PhotoComponent from './components/photo/photo.component';
import TodoComponent from './components/todo/todo.component';

function App() {
  return (
    <div className="App">
      <CounterComponent />
      <TodoComponent />
      <PhotoComponent />
    </div>
  );
}

export default App;
