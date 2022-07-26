import React from 'react';
import ButtonAndIcon from 'components/atoms/ButtonAndIcon';
import { AiFillHome } from 'react-icons/ai';

export default function NotFounded() {
  return (
    <section className='flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-blue-lt'>
            <span className='sr-only'>Error</span>404
          </h2>
          <p className='text-2xl font-semibold md:text-3xl'>
            Disculpe, esta página no ha sido encontrada
          </p>
          <p className='mt-4 mb-8 dark:text-gray-400'>
            Sin embargo, tenemos diferentes productos que pueden interesarte
          </p>

          <a
            className='flex w-full justify-center'
            rel='noopener noreferrer'
            href='/'
          >
            <ButtonAndIcon
              text='Volver al inicio'
              icon={<AiFillHome className='h-5 w-5' />}
              otherStyles='bg-violet rounded-md text-white'
              textStyle='text-white'
            />
          </a>
        </div>
      </div>
    </section>
  );
}
