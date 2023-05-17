import Todo from "@/app/todos/Todo";
import TodoAdder from "@/app/todos/TodoAdder";

export default function TodoPage() {
  return (
    <div className="center">
      <h1>Todos</h1>
      <TodoAdder />
      <Todo name="Hello" id={0} />
    </div>
  );
}
