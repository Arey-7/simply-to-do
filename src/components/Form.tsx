import styles from "./form.module.css"
import { TodoObject } from "./Todo";


export default function Form({todo, setTodo, todos, setTodos}: {todo: TodoObject; setTodo: React.Dispatch<React.SetStateAction<TodoObject>>;todos: TodoObject[]; setTodos: React.Dispatch<React.SetStateAction<TodoObject[]>>} ) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name:"", done: false});
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.todoform}>
      <input
      className={styles.mordernInput}
        onChange={(e) => setTodo({name:e.target.value, done: false})}
        type="text"
        value={todo.name}
        placeholder="Enter todo item..."
      />
      <button className={styles.mordernButton}>Add</button>
    </form>
  );
}
