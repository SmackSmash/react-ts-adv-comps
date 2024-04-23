import { PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren;

type LinkProps = {
  href: string;
};

type ComponentProps = ButtonProps | LinkProps;

const Button = (props: ComponentProps) => {
  return (
    <button className='bg-sky-600 py-2 hover:bg-sky-500'>
      {props.children}
    </button>
  );
};

export default Button;
