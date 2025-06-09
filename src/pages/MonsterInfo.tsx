import SearchBar from "../components/SearchBar";  
import MonsterGrid from "../components/MonsterGrid";
import React, { useState } from "react";


export default function Inventory() {

  const monsters = [
  {
    id: 1,
    name: "嫩寶",
    level: 1,
    drops: [
      { id: "a1", name: "紅色藥水", img: "assets/紅色藥水.png" },
      { id: "a2", name: "青蘋果", img: "assets/青蘋果.png" }
    ]
  },
  {
    id: 2,
    name: "藍寶",
    level: 2,
    drops: [
      { id: "b1", name: "紅色藥水", img: "assets/紅色藥水.png" }
    ]
  }
];

  const [keyword, setKeyword] = useState('');
  const filtered = monsters.filter(m =>
    m.name.includes(keyword) ||
    m.drops.some(d => d.name.includes(keyword))
  );

  return (
  <div>
    <SearchBar keyword={keyword} onChange={setKeyword} />
      <MonsterGrid monsters={filtered} />
      <h2>目前所有寶物清單（之後會顯示庫存）</h2>;

  </div>);
}
