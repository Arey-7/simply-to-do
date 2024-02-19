import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
import { TodoObject } from "./Todo";

export default function TodoList({todos, setTodos}: {todos: TodoObject[]; setTodos: React.Dispatch<React.SetStateAction<TodoObject[]>>}) {
  const sortedTodos = todos.slice().sort((a,b)=> Number(a.done)-Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodos.map((item, index) => (
        <TodoItem key={index} item={item} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  );
}
