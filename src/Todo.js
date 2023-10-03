import React, { useState } from 'react';

function Todo() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(-1); // Track the index of the item being edited

  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, { text: todo, completed: false }]);
      setTodo('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const editTodo = (index) => {
    setEditIndex(index);
    setTodo(todos[index].text);
  };

  const saveTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = todo;
    setTodos(updatedTodos);
    setEditIndex(-1);
    setTodo('');
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const toggleCompleted = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <div className='container'>
        <h2>DR's TODO</h2>
        <form className='formgroup' onSubmit={handleSubmit}>
          <input
            type="text"
            value={todo}
            placeholder='Enter your tasks'
            className='form-control'
            onChange={(event) => setTodo(event.target.value)}
            onKeyPress={handleKeyPress}
          />
          {editIndex === -1 ? (
            <button type="button" onClick={addTodo} >ADD</button>
          ) : (
            <button type="button" onClick={() => saveTodo(editIndex)} style={{ color: "white" }}>SAVE</button>
          )}
        </form>
        <div>
          <ul>
            {todos.map((task, index) => (
              <li key={index}>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={todo}
                    onChange={(event) => setTodo(event.target.value)}
                  />
                ) : (
                  <>
                    <span
                      onClick={() => toggleCompleted(index)}
                      style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                    >
                      {task.text}
                    </span>
                    <button  type="button" class="btn btn-secondary" onClick={() => editTodo(index)}>Edit</button>
                    <button type="button" class="btn btn-danger" onClick={() => deleteTodo(index)}>Delete</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
