import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Analytics from './pages/Analytics'; // Đảm bảo bạn đã dời file Analytics vào thư mục pages

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;