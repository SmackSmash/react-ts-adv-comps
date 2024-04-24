import { type ComponentPropsWithoutRef, type PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
  el: 'button';
}> &
  ComponentPropsWithoutRef<'button'>;

type LinkProps = PropsWithChildren<{
  el: 'anchor';
}> &
  ComponentPropsWithoutRef<'a'>;

const Button = (props: ButtonProps | LinkProps) => {
  const { el, ...otherProps } = props;

  if (el === 'anchor') {
    const { children, ...rest } = otherProps;
    return <a {...rest}>{children}</a>;
  }

  const { children, ...rest } = otherProps;
  return (
    <button
      className='border-2 border-sky-800 bg-sky-600 py-2 hover:bg-sky-500'
      {...rest}>
      {children}
    </button>
  );
};

export default Button;
