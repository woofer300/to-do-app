import { BsFillTrashFill } from "react-icons/bs";
import styles from "./Todos.module.scss";

export default function TodoCard({
  name,
  id,
  color,
  onDeleteClick,
}: {
  name: string;
  id: number;
  color: string;
  onDeleteClick: (todoID: number) => void;
}) {
  return (
    <div className={`${styles.todo} ${styles[color]}`}>
      <p>{name}</p>
      <BsFillTrashFill
        onClick={() => {
          onDeleteClick(id);
        }}
      />
    </div>
  );
}
