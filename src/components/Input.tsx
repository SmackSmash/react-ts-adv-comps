interface InputProps {
  label: string;
  id: string;
  type: 'text' | 'search' | 'number';
}

const Input = ({ label, id, type }: InputProps) => {
  return (
    <span>
      <label className='mr-4' htmlFor={id}>
        {label}
      </label>
      <input
        className='bg-zinc-950 p-2 border-2 border-zinc-200 outline-none'
        type={type}
        id={id}
      />
    </span>
  );
};

export default Input;
