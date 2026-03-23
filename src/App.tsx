import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home.tsx';
import { About } from './pages/About.tsx';
import { Cart } from './pages/Cart.tsx';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';

export const App: React.FC = () => {
  return (
    <>
      <Header />

      <main className="flex-grow flex justify-center">
        <div className="max-w-[1000px] w-full my-10 mx-10 rounded-4xl px-10 py-5 bg-sky-50 space-y-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </>
  );
};
