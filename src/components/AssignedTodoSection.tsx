"use client";

import React, { useEffect, useState } from "react";
import AssignedTodo from "./AssignedTodo";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useClerk } from "@clerk/nextjs";

interface AssignedTodoType {
  _id: string;
  title: string;
  description: string;
  assigned: string;
  organizationId: string; // Change to organizationId
  organizationName: string; // Add this if you need it in the state
}

interface OrganizationType {
  _id: string;
  title: string;
}

const AssignedTodoSection = () => {
  const { user } = useClerk();
  const assigned = user?.fullName ?? "";
  const [assignedTodos, setAssignedTodos] = useState<AssignedTodoType[]>([]);
  const [organizations, setOrganizations] = useState<Map<string, string>>(new Map());

  // Fetch assigned todos
  const todosData = useQuery(api.assignedTodo.getAssignedTodosByUser, { assigned });

  // Fetch organizations
  const orgsData = useQuery(api.organisations.getOrganisations); // Use correct query

  useEffect(() => {
    const fetchOrganizations = async () => {
      if (orgsData) {
        const orgMap = new Map<string, string>();
        orgsData.forEach((org: OrganizationType) => {
          orgMap.set(org._id, org.title);
        });
        setOrganizations(orgMap);
      }
    };

    fetchOrganizations();
  }, [orgsData]);

  useEffect(() => {
    const fetchTodosWithOrganizationNames = () => {
      if (todosData && organizations.size > 0) {
        const todosWithOrgNames = todosData.map((todo) => ({
          _id: todo._id.toString(),
          title: todo.title,
          description: todo.description,
          assigned: todo.assigned,
          organizationId: todo.organisation.toString(),
          organizationName: organizations.get(todo.organisation) || "Unknown Organization",
        }));
        setAssignedTodos(todosWithOrgNames);
      }
    };

    fetchTodosWithOrganizationNames();
  }, [todosData, organizations]);

  return (
    <div>
      <div className="flex flex-wrap gap-4 p-4">
        {assignedTodos.map((todo) => (
          <AssignedTodo key={todo._id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default AssignedTodoSection;
