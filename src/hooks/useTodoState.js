import useLocalStorageState from './useLocalStorageState';

export default (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState('todos', initialTodos);
  
  const addTodo = newTodo => {
    const id = todos.length ? todos[todos.length - 1].id + 1 : 0;
    setTodos([...todos, {id, task: newTodo, completed: false }]);
  };
  
  const removeTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };
  
  const toggleTodo = id => {
    const todoIndex = todos.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
    setTodos([...todoIndex]);
  };
  
  const editTodo = (id, task) => {
    const todoIndex = todos.map(todo => (
      todo.id === id ? { ...todo, task } : todo
    ));
    setTodos([...todoIndex]);
  };
  
  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    editTodo
  }
}
