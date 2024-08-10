import { createContext } from "react";
import { TaskContextType } from "../types/TaskContextType";

export const TaskContext = createContext<TaskContextType | undefined>(undefined)