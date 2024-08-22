"use client";

import React, { useState } from 'react';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { Modal, ModalBody, ModalFooter, ModalTrigger } from '@/components/ui/animated-modal';
import { AiOutlinePlus } from 'react-icons/ai'; 
import { api } from '../../convex/_generated/api';
import { useMutation, useQuery } from 'convex/react';

export const Organisations = () => {
  const [newOrg, setNewOrg] = useState({ title: '', description: '', admin: '' });

  const createOrgnisation = useMutation(api.organisations.createOrgnisation);
  const organisations = useQuery(api.organisations.getOrganisations);

  const handleSubmit = () => {
    if (newOrg.title && newOrg.description && newOrg.admin) {
      const newOrgData = {
        title: newOrg.title,
        description: newOrg.description,
        admin: newOrg.admin,
      };
      createOrgnisation(newOrgData);
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
                  onClick={() => setNewOrg({ title: '', description: '', admin: '' })}
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
      {organisations && <HoverEffect items={organisations.map(org => ({
        _id: org._id.toString(),
        title: org.title,
        description: org.description,
        link: `/organisations/${org._id}`,
        admin: org.admin
      }))} />}
    </div>
  );
};
