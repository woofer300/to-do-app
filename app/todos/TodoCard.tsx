import { BsFillTrashFill } from "react-icons/bs";
import styles from "./Todos.module.scss";

export default function TodoCard({ name, id }: { name: string; id: number }) {
  return (
    <div className={styles.todo}>
      <p>{name}</p>
      <BsFillTrashFill />
    </div>
  );
}
