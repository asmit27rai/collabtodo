"use client";

import React, { useState } from 'react';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { AiOutlinePlus } from 'react-icons/ai'; 
import { api } from '../../convex/_generated/api';
import { useMutation, useQuery } from 'convex/react';
import { useClerk } from '@clerk/nextjs';

export const Organisations = () => {
  const [newOrg, setNewOrg] = useState({ title: '', description: '' });
  const { user } = useClerk();
  
  const fullName = user?.fullName ?? "Unknown User";

  const createOrgnisation = useMutation(api.organisations.createOrgnisation);
  const organisations = useQuery(api.organisations.getOrganisations);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newOrg.title && newOrg.description) {
      const newOrgData = {
        title: newOrg.title,
        description: newOrg.description,
        admin: fullName,
      };
      createOrgnisation(newOrgData);
      setNewOrg({ title: '', description: '' });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const itemsWithLinks = organisations?.map(org => ({
    ...org,
    link: `/organisations/${org._id}`
  }));

  return (
    <>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto border border-white mb-12">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white">Title</label>
            <input
              type="text"
              value={newOrg.title}
              onChange={(e) => setNewOrg({ ...newOrg, title: e.target.value })}
              className="mt-1 block w-full border border-white bg-gray-900 text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Description</label>
            <textarea
              value={newOrg.description}
              onChange={(e) => setNewOrg({ ...newOrg, description: e.target.value })}
              className="mt-1 block w-full border border-white bg-gray-900 text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              rows={3}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <AiOutlinePlus size={20} />
            <span>Add Organisation</span>
          </button>
        </form>
      </div>
      {itemsWithLinks && <HoverEffect items={itemsWithLinks} />}
    </>
  );
};
