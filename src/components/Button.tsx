import { PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren;

const Button = ({ children }: ButtonProps) => {
  return (
    <button className='bg-sky-600 py-2 hover:bg-sky-500'>{children}</button>
  );
};

export default Button;
