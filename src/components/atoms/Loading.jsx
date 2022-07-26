import React from 'react';

export default function Loading() {
  return (
    <div className='w-full p-10 flex flex-col justify-center items-center'>
      <div className='mt-10 w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet' />
      <span className='mt-5 text-xl font-bold text-blue-lt'>
        ...Cargando...
      </span>
    </div>
  );
}
