import { Organisations } from '@/components/Organisations';
import React from 'react';

const Page = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 dark:text-gray-100">
        Organisations
      </h1>
      <Organisations />
    </div>
  );
};

export default Page;
