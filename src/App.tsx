import "./App.css";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import TaskList from "./components/TaskList/TaskList";
import { TaskProvider } from "./context/TaskProvider";

export const App = () => {
  return (
    <TaskProvider>
      <h1>To Do List</h1>
      <AddTaskForm />
      <TaskList />
    </TaskProvider>
  );
};
