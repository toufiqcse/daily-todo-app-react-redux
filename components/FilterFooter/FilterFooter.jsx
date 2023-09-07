import { dateChanged, statusChanged } from "@/redux/filter/actionCreator";
import { useDispatch, useSelector } from "react-redux"
import Filter from "./Filter";
import { getCurrentDateWithMonthName } from "../AddToDo/AddToDo";

const FilterFooter = ({ }) => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    const filters = useSelector((state) => state.filters);
    const { status } = filters;


    const filteredTodos = () => {
        switch (status) {
            case "All":
                return todos;
            case "Complete":
                return todos.filter(todo => todo.todoStatus === "Complete");
            case "progress":
                return todos.filter(todo => todo.todoStatus === "progress");
            case "Incomplete":
                return todos.filter(todo => todo.todoStatus === "Incomplete" || todo.todoStatus === "Hold");

            default:
                return todos;
        }
    };

    const remainingTask = filteredTodos().length;

    const handleTaskStatus = (task) => {
        switch (task) {
            case 0:
                return "No task";
            case 1:
                return "1 task";
            default:
                return `${task} tasks`;
        }
    };
    const getStatusChanged = (selectedStatus) => {
        dispatch(statusChanged(selectedStatus));
    };


    return (

        <>
            <section className=" bg-purple-200">
                <div className="flex justify-between items-center px-4 py-4 ">
                    <div>
                        <ul className="flex items-center justify-between">
                            <li>{handleTaskStatus(remainingTask)} </li>

                        </ul>
                    </div>
                    <div>
                        <ul className="flex items-center justify-between">
                            <li className={`cursor-pointer mr-4 ${status === "All" && 'font-semibold cursor-pointer mr-4'}`} onClick={() => getStatusChanged("All")}>All</li>

                            <li className="mr-4">|</li>

                            <li className={`cursor-pointer mr-4 ${status === "Complete" && 'font-semibold cursor-pointer mr-4'}`} onClick={() => getStatusChanged("Complete")}> Completed</li>

                            <li className="mr-4">|</li>

                            <li className={`cursor-pointer mr-4 ${status === "progress" && 'font-semibold cursor-pointer mr-4'}`} onClick={() => getStatusChanged("progress")}>Progress</li>

                            <li className="mr-4">|</li>

                            <li className={`cursor-pointer mr-4 ${status === "Incomplete" && 'font-semibold cursor-pointer mr-4'}`} onClick={() => getStatusChanged("Incomplete")}>Incomplete</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FilterFooter