import styles from "./todoitem.module.css";
import { TodoObject } from "./Todo";

export default function TodoItem({ item, todos, setTodos}: { item: TodoObject; todos: TodoObject[]; setTodos: React.Dispatch<React.SetStateAction<TodoObject[]>>}) {
  const handleDelete = (item: TodoObject) => {
  setTodos(todos.filter((todo: TodoObject) => todo.name !== item.name))
  };

  const handleClick = (name: string) => {
    setTodos(todos.map((todo) => todo.name === name?{...todo, done: !todo.done}: todo));
  }
 const complete = item.done? styles.completed: "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={complete} onClick={() => handleClick(item.name)}>{item.name}</span>
        <span>
          <button onClick={() => handleDelete(item)} className={styles.deleteButton}>x</button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
