// pages/edit/[id].js
import EditTask from "@/components/EditTask/EditTask";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const EditTaskPage = () => {
  const router = useRouter();
  const { id } = router.query; // Get the task ID from the URL
  const selectedTask = useSelector((state) =>
    state.todos.find((todo) => todo.todoName === id)
  );
  if (!selectedTask) {
    return <div>Task not found</div>;
  }

  return (
    <div>
      {/* Render the EditTask component here with selectedTask data */}
      <EditTask selectedTask={selectedTask} />
    </div>
  );
};

export default EditTaskPage;
