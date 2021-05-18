import React from 'react';

const Todo = ({ text, todo, setTodos, todos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeH