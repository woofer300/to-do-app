import styles from "./Todos.module.scss";
import { FormEvent, useState } from "react";

export default function TodoAdder({
  onAdd,
}: {
  onAdd: (name: string) => void;
}) {
  const [todoInputValue, setTodoInputValue] = useState("");

  function handleAdd(e: FormEvent) {
    e.preventDefault();
    if (/\S/.test(todoInputValue)) {
      onAdd(todoInputValue);
      setTodoInputValue("");
    }
  }

  return (
    <div className={styles.todoAdder}>
      <form onSubmit={handleAdd}>
        <input
          placeholder="Add a todo..."
          value={todoInputValue}
          onInput={(e) =>
            setTodoInputValue((e.target as HTMLInputElement).value)
          }
        />
      </form>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
