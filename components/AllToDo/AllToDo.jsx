import Image from "next/image"
import Progress from "../ProgressBar/Progress"
import { FaCross, FaEdit, } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai"
import Link from "next/link"
import { deleteTodo, } from "@/redux/todos/actionsCreator"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-hot-toast"
import ToBase64 from "../ToBase64"
import Shimmer from "../Shimmer"



const AllToDo = ({ todo }) => {
    const todos = useSelector((state) => state.todos)
    const { todoName, todoDate, todoStatus, todoProgress, todoImage, id } = todo;
    const dispatch = useDispatch();
    const handleDeleteTodo = (id) => {
        if (todos.length == 1) {
            toast.error("This is not Deleted Todo please add another Todo")
        }
        else {
            dispatch(deleteTodo(id))
        }
    }






    return (
        <>
            <tr className="hover:bg-slate-100 hover:cursor-pointer hover:transition-all duration-500 border-2 hovered-row  font-medium text-slate-800  select-none  ">
                <td className="px-4">
                    <div className="flex items-center">
                        <div className={`rounded-full  border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${todoStatus === "Complete" && "bg-green-600" || todoStatus === "Hold" && "bg-sky-500 " || todoStatus === "Incomplete" && "bg-red-500 " || todoStatus === "progress" && "bg-yellow-600 "}`}>
                            <input
                                type="checkbox"
                                className="opacity-0 absolute rounded-full "
                            // onChange={() => handleStatusChanged(id)}
                            />
                            <svg
                                className={`fill-current w-3 h-3   pointer-events-none  text-white`}
                                viewBox="0 0 20 20"
                            >
                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                            </svg>
                        </div>
                        <div className={`select-none`}>{todoName}</div>
                    </div>
                </td>
                <td className='px-1 text-center'>{todoDate}</td>
                <td className={`'px-4 ' ${todoStatus === "Complete" && "bg-green-500 text-center" || todoStatus === "Hold" && "bg-sky-500 text-center" || todoStatus === "Incomplete" && "bg-red-500 text-center" || todoStatus === "progress" && "bg-yellow-600 text-center"}`}>{todoStatus}</td>
                <td className='px-4'>
                    <div className="flex items-center justify-center w-14  m-auto">
                        {/* <Image src={todoImage?.url} width={60} height={30} alt="" objectFit="fit" srcset="" priority={true} className='rounded-full ' /> */}
                        <Image style={{ height: "50px", width: "100px", borderRadius: "50%" }}
                            width={100}
                            height={1}
                            unoptimized={() => todoImage?.url}
                            src={todoImage?.url}
                            placeholder="blur"
                            blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                                Shimmer(60, 30)
                            )}`}
                            alt={todoImage.name}
                        // layout="responsive"
                        // className=" rounded-full"
                        />
                    </div>
                </td>
                <td className=" px-4">
                    <Progress todo={todo} />
                </td>
                <td className='px-4  relative'>
                    <span className='flex items-center justify-center text-yellow-600 text-xl'>
                        <Link href={`/edit/${todo.todoName}`}>
                            <button>
                                <FaEdit />
                            </button>
                        </Link>
                    </span>
                    <button onClick={() => handleDeleteTodo(id)} className="absolute right-0 top-0 transition-all duration-500 hidden overflow-hidden  text-red-600 text-xl delete-icon">
                        < AiFillDelete />
                    </button>
                </td>

            </tr>


        </>

    )
}

export default AllToDo
