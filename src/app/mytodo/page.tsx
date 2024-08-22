import AssignedTodo from '@/components/AssignedTodo'; 
import PersonalTodoSection from '@/components/PersonalTodoSection';
import React from 'react';

const Page = () => {
  const assignedTodos = [
    {
      id: 4,
      title: 'Prepare Presentation',
      description: 'Create slides for the upcoming team meeting.',
      Assignee: 'Alice',
      Organization: 'ABC Inc.',
      DueDate: new Date('2024-08-25'),
    },
    {
      id: 5,
      title: 'Project Report',
      description: 'Compile and submit the project report by Friday.',
      Assignee: 'Bob',
      Organization: 'XYZ Corp.',
      DueDate: new Date('2024-08-22'),
    },
    {
      id: 6,
      title: 'Review Code',
      description: 'Review the latest code changes and provide feedback.',
      Assignee: 'Charlie',
      Organization: 'PQR Ltd.',
      DueDate: new Date('2024-08-20'),
    },
  ];

  return (
    <>
      <h1 className='text-[20px] mb-6'>Personal Todos</h1>
      <PersonalTodoSection />
      <h1 className='text-[20px] mb-6'>Assigned Todos</h1>
      <div className="flex flex-wrap gap-4 p-4">
        {assignedTodos.map(todo => (
          <AssignedTodo key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
};

export default Page;
