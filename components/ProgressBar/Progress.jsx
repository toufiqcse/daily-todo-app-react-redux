import { useSelector } from "react-redux";
import ProgressChart from "./ProgressBar";

const Progress = ({ todo }) => {



    return (
        <div className="flex justify-center items-center">

            <ProgressChart todo={todo}></ProgressChart>

        </div>
    );
};

export default Progress;