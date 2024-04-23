interface InputProps {
  name: string;
  label: string;
}

const Input = ({ name, label }: InputProps) => {
  return (
    <span>
      <label className='mr-4' htmlFor={name}>
        {label}
      </label>
      <input
        className='bg-zinc-950 p-2 border-2 border-zinc-200 outline-none'
        type='text'
        name={name}
        id={name}
      />
    </span>
  );
};

export default Input;
