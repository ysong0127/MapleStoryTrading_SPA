import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function MainLayout() {
  return (
    <div className="bg-[#1e1e2f] text-gray-100 min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        <Outlet />
      </main>
      <footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-700 mt-12">
        © 2025 MapleStoryTrading
      </footer>
    </div>
  );
}