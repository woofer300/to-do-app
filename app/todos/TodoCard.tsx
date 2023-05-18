import { BsFillTrashFill } from "react-icons/bs";
import styles from "./Todos.module.scss";

export default function TodoCard({
  name,
  id,
  onDeleteClick,
}: {
  name: string;
  id: number;
  onDeleteClick: (todoID: number) => void;
}) {
  return (
    <div className={styles.todo}>
      <p>{name}</p>
      <BsFillTrashFill
        onClick={() => {
          onDeleteClick(id);
        }}
      />
    </div>
  );
}
