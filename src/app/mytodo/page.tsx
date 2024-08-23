import AssignedTodoSection from '@/components/AssignedTodoSection';
import PersonalTodoSection from '@/components/PersonalTodoSection';
import React from 'react';

const Page = () => {
  return (
    <>
      <h1 className='text-[20px] mb-6'>Personal Todos</h1>
      <PersonalTodoSection />
      <h1 className='text-[20px] mb-6'>Assigned Todos</h1>
      <AssignedTodoSection />
    </>
  );
};

export default Page;
