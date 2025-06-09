import { Routes, Route } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import Home from './pages/home';
 import Inventory from './pages/Inventory';
import MonsterInfo from './pages/MonsterInfo';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
         <Route path="inventory" element={<Inventory />} />
        <Route path="MonsterInfo" element={<MonsterInfo />} />
      </Route>
    </Routes>
  );
}
