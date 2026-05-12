import { Route, Routes } from 'react-router-dom';
import WhatsappButton from './components/WhatsappButton';
import './App.css';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<WhatsappButton />} />
    </Routes>
  );
}

export default App;
