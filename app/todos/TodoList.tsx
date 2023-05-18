"use client";

import { useState } from "react";
import TodoAdder from "@/app/todos/TodoAdder";
import TodoCard from "@/app/todos/TodoCard";

type Todo = {
  name: string;
  id: number;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  let id = 0;
  function addTodo(todoName: string) {
    setTodos([{ name: todoName, id: id }, ...todos]);
    id++;
  }

  function removeTodo(todoID: number) {
    setTodos(todos.filter((todo) => todo.id != todoID));
  }

  return (
    <>
      <TodoAdder onAdd={addTodo}></TodoAdder>
      {todos.map((todo) => {
        let todoCard = (
          <TodoCard name={todo.name} id={todo.id} onDeleteClick={removeTodo} />
        );
        id++;
        return todoCard;
      })}
    </>
  );
}
