import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import MultilineTextFields from './MultilineTextFields';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Button variant="contained" color="primary">
         test
       </Button>
       <MultilineTextFields />
      </header>
    </div>
  );
}

export default App;
