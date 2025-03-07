
import Home from './pages/Home/Home'
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <div className="App">
      <SnackbarProvider >
      <div>
        <Home />
      </div>
    </SnackbarProvider>
    </div>
  );
}

export default App;
