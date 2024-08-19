import React from 'react';

interface PageProps {
  params: {
    id: string; 
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  return (
    <div>My Post: {params.id}</div>
  );
};

export default Page;
