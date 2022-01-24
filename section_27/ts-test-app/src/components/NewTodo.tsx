import {  useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodoContext } from "../store/todos-context";


const NewTodo: React.FC = () => {
	const inputRef = useRef<HTMLInputElement>(null);
    const todoCtx = useContext(TodoContext);
	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const enteredText = inputRef.current!.value;
		console.log(enteredText);
        todoCtx.onAddHandler(enteredText);
	};

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<label>New Task</label>
			<input type="text" ref={inputRef}></input>
			<button>Submit Task</button>
		</form>
	);
};

export default NewTodo;
// 8920188303