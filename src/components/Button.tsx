import { type ComponentPropsWithoutRef, type PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
  el: 'button';
}> &
  ComponentPropsWithoutRef<'button'>;

type LinkProps = PropsWithChildren<{
  el: 'anchor';
  href: string;
}> &
  ComponentPropsWithoutRef<'a'>;

const Button = (props: ButtonProps | LinkProps) => {
  const { el } = props;

  switch (el) {
    case 'button':
    default:
      return (
        <button className='border-2 border-sky-800 bg-sky-600 py-2 hover:bg-sky-500'>
          {props.children}
        </button>
      );
    case 'anchor':
      return <a {...props}>{props.children}</a>;
  }
};

export default Button;
