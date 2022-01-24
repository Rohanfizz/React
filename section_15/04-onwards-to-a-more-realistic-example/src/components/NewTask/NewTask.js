import useRequest from "../../hooks/use-request";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
	const { isLoading, error, sendRequest: sendTaskRequest } = useRequest();

	const enterTaskHandler = async (taskText) => {
		const createTask = (taskData) => {
			const generatedId = taskData.name; // firebase-specific => "name" contains generated id
			const createdTask = { id: generatedId, text: taskText };

			props.onAddTask(createdTask);
		};
		sendTaskRequest(
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: { text: taskText },
			},
			createTask
		);
	};

	return (
		<Section>
			<TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
			{error && <p>{error}</p>}
		</Section>
	);
};

export default NewTask;
