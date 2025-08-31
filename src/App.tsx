import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <>
      <Button
        label={'klikaj'}
        onClick={() => alert('Kliknięto')}
        disabled={false}
        variant="danger"
      />
    </>
  );
}

export default App;
