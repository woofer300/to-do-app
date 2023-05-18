import TodoList from "@/app/todos/TodoList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "To-dos",
};

export default function TodoPage() {
  return (
    <div className="center">
      <h2>To-dos</h2>
      <TodoList />
    </div>
  );
}
