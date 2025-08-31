import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <>
      <Button
        label={'klikaj'}
        onClick={() => alert('Kliknięto')}
        disabled={false}
        variant="primary"
        size="lg"
      />
    </>
  );
}

export default App;
