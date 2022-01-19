import React, { useState, useEffect, useCallback } from "react";
import useRequest from "./hooks/use-request";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

function App() {
	const [tasks, setTasks] = useState([]);

	const { isLoading, error, sendRequest: fetchTasks } = useRequest();

	useEffect(() => {
		const applyData = (taskObj) => {
			const loadedTasks = [];

			for (const taskKey in taskObj) {
				loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
			}

			setTasks(loadedTasks);
		};

		fetchTasks({}, applyData);
	}, [fetchTasks]);

	const taskAddHandler = (task) => {
		setTasks((prevTasks) => prevTasks.concat(task));
	};

	return (
		<React.Fragment>
			<NewTask onAddTask={taskAddHandler} />
			<Tasks
				items={tasks}
				loading={isLoading}
				error={error}
				onFetch={fetchTasks}
			/>
		</React.Fragment>
	);
}

export default App;
