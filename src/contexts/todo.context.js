import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todo.reducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

const defaultTodo = [
  { id: 1, task: "Walk the Goldfish", completed: true },
  { id: 2, task: "Buy fruits", completed: false }
  ];

export const TodoContext = createContext();
export const DispatchContext = createContext();

export function TodoProvider({children}) {
  const [todos, dispatch] = useLocalStorageReducer('todos', defaultTodo, todoReducer);
  
  return (
    <TodoContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {children}
        </DispatchContext.Provider>
    </TodoContext.Provider>
  )
}
