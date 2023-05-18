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
    setTodos([{ name: todoName, id: 1 }, ...todos]);
  }

  function removeTodo(todoID: number) {}

  return (
    <>
      <TodoAdder onAddClick={addTodo}></TodoAdder>
      {todos.map((todo) => {
        let todoCard = <TodoCard name={todo.name} id={todo.id} />;
        id++;
        return todoCard;
      })}
    </>
  );
}
