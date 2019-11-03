import React from 'react';

import TodoApp from './components/TodoApp';
import ContextApi from './components/ContextApi';

function App() {
  return (
    <>
      <TodoApp />
    <div style={{ display: 'none'}}>
      <ContextApi />
    </div>

    </>
  );
}

export default App;
