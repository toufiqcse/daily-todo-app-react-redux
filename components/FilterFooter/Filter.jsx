import { useDispatch, useSelector } from "react-redux";

const Filter = ({ todo }) => {
    const dispatch = useDispatch();
    const { todoStatus } = todo
    const todos = useSelector((state) => state.todos);
    const remainingTask = todos.filter(todo => !todo.todoStatus === "Complete").length;
    console.log(remainingTask);
    const handleTaskStatus = (task) => {
        switch (task) {
            case 0:
                return "No task";
            case 1:
                return "1 task";
            default:
                return `${task} tasks`;
        }
    }

    const filters = useSelector((state) => state.filters);
    const { status } = filters;

    const getStatusChanged = (status) => {
        dispatch(statusChanged(status))
    }

    return (
        <section className=" bg-purple-200">
            <div className="flex justify-between items-center px-4 py-4 ">
                <div>
                    <ul className="flex items-center justify-between">
                        <p>{handleTaskStatus(remainingTask)}  left</p>
                        <li className="cursor-pointer mr-4 font-semibold">Today</li>
                        <li className="cursor-pointer mr-4">Yesterday</li>
                        <li className="cursor-pointer mr-4">Prev. Week</li>
                    </ul>
                </div>
                <div>

                    <ul className="flex items-center justify-between">
                        <li className={`cursor-pointer mr-4 ${status === "All" && 'font-semibold cursor-pointer mr-4'}`} onClick={() => getStatusChanged("All")}>All</li>
                        <li className="mr-4">|</li>
                        <li className={`cursor-pointer mr-4 ${status === "Complete" && 'font-semibold cursor-pointer mr-4'}`} onClick={() => getStatusChanged("Complete")} > Completed</li>
                        <li>|</li>
                        <li className="cursor-pointer mr-4">On Going</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Filter