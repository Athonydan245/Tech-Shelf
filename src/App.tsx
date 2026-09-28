import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Analytics from './pages/Analytics';
import ThankYou from './pages/ThankYou'; // Import trang Thank You mới

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/thank-you" element={<ThankYou />} /> {/* Khai báo đường dẫn */}
      </Routes>
    </BrowserRouter>
  );
}