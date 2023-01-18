import Todo from "./Todo";
import styles from './TodoList.module.css'

function TodoList(props) {

    const { todos, deleteTodoItem } = props;

    return (
        <div className={styles.todoListContainer}>
            {/* //- если todos.length === 0  */}
            {!todos.length && <h2>Todo List is empty</h2>}
            {todos.map((todo) => (<Todo key={todo.id} todo={todo} deleteTodo={deleteTodoItem}/>))}
        </div>
    )
}

export default TodoList;