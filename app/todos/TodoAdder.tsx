import styles from "./Todos.module.scss";
import { useState } from "react";

export default function TodoAdder({
  onAddClick,
}: {
  onAddClick: (name: string) => void;
}) {
  const [todoInputValue, setTodoInputValue] = useState("");

  function handleAddClick() {
    onAddClick(todoInputValue);
    setTodoInputValue("");
  }

  return (
    <div className={styles.todoAdder}>
      <form>
        <input
          placeholder="Add a todo..."
          value={todoInputValue}
          onInput={(e) =>
            setTodoInputValue((e.target as HTMLInputElement).value)
          }
        />
      </form>
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}
