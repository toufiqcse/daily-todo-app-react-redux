// components/CircleChart.js

import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';

const todoProgressChart = ({ todo }) => {
    const { todoName, todoDate, todoStatus, todoProgress, todoImage, id } = todo;
    let progress = todoProgress;
    const radius = 30;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (todoProgress / 100) * circumference;

    let progressColorClass = '';
    // Check if todoStatus is "Hold" and set progress to 0
    if (todoStatus === "Hold") {
        progress = 0;
    }

    if (progress <= 30 && todoStatus === "Incomplete") {
        progressColorClass = 'text-red-500';
    } else if (progress == 50 && todoStatus === "progress") {
        progressColorClass = 'text-yellow-600';
    }
    else if (progress > 80 && todoStatus === "Complete") {
        progressColorClass = 'text-green-600';
    }


    return (
        <div className="relative">
            <svg width="80" height="80" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <circle
                    className="text-gray-300"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    r={radius}
                    cx="60"
                    cy="60"
                />
                <circle
                    className={`${progressColorClass
                        }`}
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="transparent"
                    r={radius}
                    cx="60"
                    cy="60"
                    style={{
                        strokeDasharray: `${circumference} ${circumference}`,
                        strokeDashoffset: strokeDashoffset,
                    }}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-[1rem] font-semibold  ">
                {progress}%
            </div>
        </div>
    );
};

todoProgressChart.propTypes = {
    todoProgress: PropTypes.number.isRequired,
};

export default todoProgressChart;
