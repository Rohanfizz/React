import React, { useContext } from "react";
import classes from "./Todos.module.css";
import TaskItem from "./TaskItem";
import { TodoContext } from "../store/todos-context";

const Todos: React.FC= () => {

	const todoCtx = useContext(TodoContext);

	return (
		<ul className={classes.todos}>
			{todoCtx.items.map((task) => {
				return <TaskItem task={task} onRemove={todoCtx.onRemoveHandler}/>;
			})}
		</ul>
	);
};
export default Todos;
