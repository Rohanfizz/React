import React,{useState} from "react";
import Todo from "../models/todo";

type TodoContextObj = {
	items: Todo[];
	onAddHandler: (text: string) => void;
	onRemoveHandler: (id: string) => void;
};

export const TodoContext = React.createContext<TodoContextObj>({
	items: [],
	onAddHandler: (id: string) => {},
	onRemoveHandler: (id: string) => {},
});

export const TodoContextProvider: React.FC = (props) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const onAddHandler = (text: string) => {
		console.log(text);
		setTodos((prev) => [...prev, new Todo(new Date().toISOString(), text)]);
	};

	const onRemoveHandler = (id: string) => {
		setTodos((prev) => prev.filter((todo: Todo) => todo.id !== id));
	};
	const ctxValue : TodoContextObj = ({
        items: todos,onAddHandler: onAddHandler,onRemoveHandler: onRemoveHandler
    })

	return <TodoContext.Provider value={ctxValue}>{props.children}</TodoContext.Provider>;
};

export default TodoContextProvider;