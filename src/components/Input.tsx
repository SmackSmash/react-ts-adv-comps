import { type ComponentPropsWithoutRef } from 'react';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  id: string;
}

const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <span className='flex flex-col w-full my-2'>
      <label className='mr-4 mb-2' htmlFor={id}>
        {label}
      </label>
      <input
        className='bg-zinc-950 p-2 border-2 border-zinc-200 outline-none'
        id={id}
        {...props}
      />
    </span>
  );
};

export default Input;
