"use client";

import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { api } from "../../convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import PersonalTodo from "./PersonalTodo";
import { Id } from "../../convex/_generated/dataModel";

const PersonalTodoSection = () => {
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    Completed: false,
  });

  const createPersonalTodo = useMutation(api.personalTodo.createPersonalTodo);
  const updatePersonalTodo = useMutation(api.personalTodo.updatePersonalTodo);
  const deletePersonalTodo = useMutation(api.personalTodo.deletePersonalTodo);
  const personalTodos = useQuery(api.personalTodo.getPersonalTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.title && newTodo.description) {
      createPersonalTodo({
        title: newTodo.title,
        description: newTodo.description,
        Completed: newTodo.Completed,
      });
      setNewTodo({
        title: "",
        description: "",
        Completed: false,
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleToggleComplete = (id: Id<"personalTodo">) => {
    updatePersonalTodo({ id });
  };

  const handleDelete = (id: Id<"personalTodo">) => {
    deletePersonalTodo({ id });
  };

  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className="w-full max-w-md mx-auto bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg shadow-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Add New Personal Todo</h2>
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">Title</label>
            <input
              type="text"
              value={newTodo.title}
              onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
              className="mt-1 block w-full border border-white bg-gray-900 text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">Description</label>
            <textarea
              value={newTodo.description}
              onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
              className="mt-1 block w-full border border-white bg-gray-900 text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              rows={4}
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => setNewTodo({ title: "", description: "", Completed: false })}
              className="px-4 py-2 bg-gray-600 text-white rounded-md border border-gray-300 hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md px-4 py-2 border border-blue-600 hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-wrap gap-4 p-4">
        {personalTodos && personalTodos.map((todo) => (
          <div key={todo._id} className="bg-gray-800 p-4 rounded-lg shadow-lg relative">
            <PersonalTodo 
              todo={todo} 
              onToggleComplete={() => handleToggleComplete(todo._id )} 
              onDelete={() => handleDelete(todo._id)} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalTodoSection;
