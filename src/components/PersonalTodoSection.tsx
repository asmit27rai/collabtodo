"use client";

import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Modal, ModalBody, ModalFooter, ModalTrigger, useModal } from "@/components/ui/animated-modal";
import { api } from "../../convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import PersonalTodo from "./PersonalTodo";

const PersonalTodoSection = () => {
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    Completed: false,
  });

  const { open, setOpen } = useModal();
  const createPersonalTodo = useMutation(api.personalTodo.createPersonalTodo);
  const personalTodos = useQuery(api.personalTodo.getPersonalTodo);

  const handleSubmit = () => {
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
      setOpen(false);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-8">
      <Modal>
        <ModalTrigger onClick={() => setOpen(true)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 transition-colors duration-300 flex items-center gap-2">
          <AiOutlinePlus size={20} />
          <span>Add Personal Todo</span>
        </ModalTrigger>
        <ModalBody>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto border border-white">
            <h2 className="text-2xl font-semibold mb-4 text-white">Add New Personal Todo</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
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
              <ModalFooter>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
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
              </ModalFooter>
            </form>
          </div>
        </ModalBody>
      </Modal>
      <div className="flex flex-wrap gap-4 p-4">
        {personalTodos && personalTodos.map((todo) => (
          <PersonalTodo key={todo._id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default PersonalTodoSection;
