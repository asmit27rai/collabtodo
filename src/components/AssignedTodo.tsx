"use client";

import React, { useState } from "react";
import { Meteors } from "./ui/meteors";

type Todo = {
  id: number;
  title: string;
  description: string;
  Assignee: string;
  Organization: string;
  DueDate: Date;
};

type AssignedTodoProps = {
  todo: Todo;
};

const AssignedTodo: React.FC<AssignedTodoProps> = ({ todo }) => {
  const [todoCompleted, setTodoCompleted] = useState(false);

  const handleComplete = () => {
    setTodoCompleted(!todoCompleted);
  };

  // Ensure consistent date formatting
  const formattedDate = todo.DueDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <div className="">
      <div className="w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            {todo.title}
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            {todo.description}
          </p>

          <div className="font-normal text-base text-slate-400 mb-4 relative z-50">
            <p>
              <strong>Assignee:</strong> {todo.Assignee}
            </p>
            <p>
              <strong>Organization:</strong> {todo.Organization}
            </p>
            <p>
              <strong>Due Date:</strong> {formattedDate}
            </p>
          </div>

          <div className="flex space-x-4 mb-4 relative z-50">
            <button
              className={`border px-4 py-1 rounded-lg text-gray-100 transition-colors duration-300 ease-in-out ${
                todoCompleted
                  ? "bg-green-600 border-green-600 hover:bg-green-700"
                  : "bg-red-500 border-red-500 hover:bg-red-600"
              }`}
              onClick={handleComplete}
            >
              {todoCompleted ? 'Completed' : 'Complete'}
            </button>
          </div>

          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
};

export default AssignedTodo;
