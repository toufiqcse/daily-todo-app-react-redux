import React from "react";

const LoadingSkeleton = () => {
  return (
    <tr className="loading-skeleton">
      <td className="px-4">
        <div className="flex items-center">
          <div className="rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2">
            <div className="loading-checkbox"></div>
          </div>
          <div className="loading-text select-none"></div>
        </div>
      </td>
      <td className="px-4 loading-text"></td>
      <td className="px-4 loading-text"></td>
      <td className="px-4 loading-image">
        <div className="flex items-center justify-center w-8 h-8 m-auto">
          <div className="loading-image-placeholder"></div>
        </div>
      </td>
      <td className="px-4 loading-progress">
        <div className="loading-progress-placeholder"></div>
      </td>
      <td className="px-4 loading-buttons">
        <div className="flex items-center justify-center text-yellow-600 text-xl">
          <div className="loading-button"></div>
        </div>
        <div className="loading-button"></div>
      </td>
    </tr>
  );
};

export default LoadingSkeleton;
