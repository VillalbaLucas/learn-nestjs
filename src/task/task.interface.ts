import { Priority } from "./priority.enum";

export interface Task {
    id: number,
    name: string,
    priority: Priority,
    desciption: string
}
