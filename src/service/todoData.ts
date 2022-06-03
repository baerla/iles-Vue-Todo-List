/** @format */
import {ITodo} from "@/components/todo/interface";

export const genTodoId = (): string => Math.random().toString(36).slice(-6);
const data: ITodo[] = [
    {
        id: genTodoId(),
        title: 'React.js',
        completed: false,
    },
    {
        id: genTodoId(),
        title: 'Vue.js',
        completed: true,
    },
    {
        id: genTodoId(),
        title: 'Angular2+',
        completed: false,
    },
    {
        id: genTodoId(),
        title: 'iles.js',
        completed: false
    },
]

export default data;
