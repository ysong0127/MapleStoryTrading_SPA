// app/components/Navbar.tsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>🏠 首頁</Link>
      <Link to="/submit" style={{ marginRight: '1rem' }}>📝 提交寶物</Link>
      <Link to="/inventory">📦 查看庫存</Link>
      <Link to="/MonsterInfo">📦 怪物卡</Link>
    </nav>
  );
}
