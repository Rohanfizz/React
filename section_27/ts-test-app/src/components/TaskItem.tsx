import React from "react";
import classes from "./TaskItem.module.css";
import Todo from "../models/todo";

const TaskItem: React.FC<{ task: Todo; onRemove: (id: string) => void }> = (
	props
) => {
    const onClickHandler = (event: React.MouseEvent) => {
        props.onRemove(props.task.id);
    };
	return (
		<li key={props.task.id} className={classes.item} onClick={onClickHandler}>
			{props.task.text}
		</li>
	);
};
export default TaskItem;
