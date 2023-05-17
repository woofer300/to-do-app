"use client";

import styles from "./Todos.module.scss";

export default function TodoAdder() {
  return (
    <div className={styles.todoAdder}>
      <form>
        <input placeholder="Add a todo..." />
      </form>
      <button>Add</button>
    </div>
  );
}
