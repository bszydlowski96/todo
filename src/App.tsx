import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <>
      <Button
        label={'Kliknij'}
        onClick={() => alert('Kliknięto')}
        disabled={false}
      />
    </>
  );
}

export default App;
