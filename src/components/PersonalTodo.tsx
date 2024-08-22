"use client";

import React from 'react';
import { AiOutlineDelete, AiOutlineCheck } from 'react-icons/ai';
import { Meteors } from './ui/meteors';

type Todo = {
  _id: string;
  title: string;
  description: string;
  Completed: boolean;
};

type PersonalTodoProps = {
  todo: Todo;
  onToggleComplete: () => void;
  onDelete: () => void;
};

const PersonalTodo: React.FC<PersonalTodoProps> = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="relative rounded-lg overflow-hidden shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg blur-lg" />
        <div className="relative bg-gray-900 border border-gray-800 p-4 rounded-lg flex flex-col justify-between h-full">
          <div className="mb-4">
            <h1 className="text-xl font-bold text-white">{todo.title}</h1>
            <p className="text-base text-slate-300">{todo.description}</p>
          </div>
          <div className="flex justify-between items-center mt-auto">
            <button
              className={`flex items-center justify-center border px-4 py-1 rounded-lg text-white transition-colors duration-300 ${todo.Completed ? 'bg-green-500 border-green-500' : 'bg-gray-700 border-gray-700 hover:bg-gray-600'}`}
              onClick={onToggleComplete}
            >
              {todo.Completed ? 'Completed' : <AiOutlineCheck size={20} />}
            </button>
            <button
              className="flex items-center justify-center border px-4 py-1 rounded-lg text-white bg-red-500 border-red-500 hover:bg-red-600 transition-colors duration-300"
              onClick={onDelete}
            >
              <AiOutlineDelete size={20} />
            </button>
          </div>
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
};

export default PersonalTodo;
