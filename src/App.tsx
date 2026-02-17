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

      <main className="min-h-[calc(100vh-48px-40px-96px)]">
        <div className="my-10 mx-[15vw] rounded-4xl py-5 px-10 bg-sky-50">
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
