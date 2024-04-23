import Button from './components/Button';
import Input from './components/Input';

const App = () => {
  return (
    <main className='flex flex-col w-1/2 p-4'>
      <Input label='First Name:' id='firstname' type='text' />
      <Input label='Last Name:' id='lastname' type='text' />
      <Input label='Age:' id='age' type='number' />
      <Button>Click Me</Button>
    </main>
  );
};

export default App;
