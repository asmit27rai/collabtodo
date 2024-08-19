"use client";

import React, { useState } from 'react';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { Modal, ModalBody, ModalFooter, ModalTrigger } from '@/components/ui/animated-modal';
import { AiOutlinePlus } from 'react-icons/ai'; 

export const Organisations = () => {
  const [orgs, setOrgs] = useState([
    {
      id: "1",
      title: "Stripe",
      description: "A technology company that builds economic infrastructure for the internet.",
      link: "/organisations/1",
      admin: "John Doe",
    },
    {
      id: "2",
      title: "GitHub",
      description: "A development platform to host and review code, manage projects, and build software.",
      link: "/organisations/2",
      admin: "Jane Smith",
    },
    {
      id: "3",
      title: "OpenAI",
      description: "An AI research and deployment company with a mission to ensure that artificial general intelligence benefits all of humanity.",
      link: "/organisations/3",
      admin: "Alice Johnson",
    },
    {
      id: "4",
      title: "Netflix",
      description: "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more.",
      link: "/organisations/4",
      admin: "Bob Williams",
    },
    {
      id: "5",
      title: "Google",
      description: "A global technology company focused on services and products related to the internet, including a search engine, online advertising, and more.",
      link: "/organisations/5",
      admin: "Charlie Brown",
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [newOrg, setNewOrg] = useState({ title: '', description: '', admin: '' });

  const handleSubmit = () => {
    if (newOrg.title && newOrg.description && newOrg.admin) {
      const newId = (orgs.length + 1).toString();
      const newOrgData = {
        id: newId,
        ...newOrg,
        link: `/organisations/${newId}`,
      };
      setOrgs([...orgs, newOrgData]);
      setModalOpen(false);
      setNewOrg({ title: '', description: '', admin: '' });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-8">
      <Modal>
        <ModalTrigger className="mb-4 px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 transition-colors duration-300 flex items-center gap-2">
          <AiOutlinePlus size={20} />
          <span>Add Organisation</span>
        </ModalTrigger>
        <ModalBody>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto border border-white">
            <h2 className="text-2xl font-semibold mb-4 text-white">Add New Organisation</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">Title</label>
                <input
                  type="text"
                  value={newOrg.title}
                  onChange={(e) => setNewOrg({ ...newOrg, title: e.target.value })}
                  className="mt-1 block w-full border border-white bg-gray-900 text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">Description</label>
                <textarea
                  value={newOrg.description}
                  onChange={(e) => setNewOrg({ ...newOrg, description: e.target.value })}
                  className="mt-1 block w-full border border-white bg-gray-900 text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  rows={4}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">Admin</label>
                <input
                  type="text"
                  value={newOrg.admin}
                  onChange={(e) => setNewOrg({ ...newOrg, admin: e.target.value })}
                  className="mt-1 block w-full border border-white bg-gray-900 text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <ModalFooter className="gap-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
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
      <HoverEffect items={orgs} />
    </div>
  );
};
