import styles from "./footer.module.css";

export default function Footer({
  completedTodos,
  totalTodos,
}: {
  completedTodos: number;
  totalTodos: number;
}) {
  return (
    <div className={styles.footer}>
      <span className={styles.complete}>
        You have completed {completedTodos}/{totalTodos} items.
      </span>
    </div>
  );
}
