import { PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
  el: 'button';
}>;

type LinkProps = PropsWithChildren<{
  el: 'anchor';
  href: string;
}>;

type ComponentProps = ButtonProps | LinkProps;

const Button = (props: ComponentProps) => {
  switch (props.el) {
    case 'button':
    default:
      return (
        <button className='bg-sky-600 py-2 hover:bg-sky-500'>
          {props.children}
        </button>
      );
    case 'anchor':
      return <a href={props.href}>{props.children}</a>;
  }
};

export default Button;
