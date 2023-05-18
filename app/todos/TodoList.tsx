"use client";

import { useState } from "react";
import TodoAdder from "@/app/todos/TodoAdder";
import TodoCard from "@/app/todos/TodoCard";

type Todo = {
  name: string;
  id: number;
  color: string;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  let id = 0;

  function startingColorFromId(id: number) {
    if (id % 3 == 0) {
      return "blue";
    } else if ((id - 1) % 3 == 0) {
      return "green";
    } else {
      return "purple";
    }
  }

  function addTodo(todoName: string) {
    setTodos([
      { name: todoName, id: id, color: startingColorFromId(id) },
      ...todos,
    ]);
    id++;
  }

  function removeTodo(todoId: number) {
    setTodos(todos.filter((todo) => todo.id != todoId));
  }

  return (
    <>
      <TodoAdder onAdd={addTodo}></TodoAdder>
      {todos.map((todo) => {
        let todoCard = (
          <TodoCard
            name={todo.name}
            id={todo.id}
            color={todo.color}
            onDeleteClick={removeTodo}
          />
        );
        id++;
        return todoCard;
      })}
    </>
  );
}
