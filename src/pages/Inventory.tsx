import  { useState } from 'react';


// 假設每一個卷軸資料長這樣
const initialScrolls = [
  { id: 1, name: "矛攻擊卷軸60%", img: "矛攻擊卷軸60%.png", count: 0 },
  { id: 2, name: "耳環智力卷軸10%", img: "耳環智力卷軸10%.png", count: 0 },
  { id: 3, name: "拳套攻擊卷軸60%", img: "拳套攻擊卷軸60%.png", count: 0 }
];

export default function ScrollInventory() {
  const [scrolls, setScrolls] = useState(initialScrolls);

  const handleCountChange = (id: number, delta: number) => {
    setScrolls(prev =>
      prev.map(s =>
        s.id === id ? { ...s, count: Math.max(0, s.count + delta) } : s
      )
    );
  };

  return (
    <div style={{ padding: '16px' }}>
      <h2>卷軸庫存清單</h2>
      <div style={{ display: 'grid', gap: '12px' , gridTemplateColumns: 'repeat(3, 1fr)', }}>
        {scrolls.map(scroll => (
          <div
            key={scroll.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              background: '#222',
              color: '#fff',
              padding: '12px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.5)'
            }}
          >
            <img
              src={'assets/'+encodeURIComponent(scroll.img)}
              alt={scroll.name}
              style={{ width: 40, marginRight: 12 }}
            />
            <span style={{ flex: 1 }}>{scroll.name}</span>
            <button onClick={() => handleCountChange(scroll.id, -1)}>-</button>
            <span style={{ margin: '0 10px' }}>{scroll.count}</span>
            <button onClick={() => handleCountChange(scroll.id, 1)}>+</button>
          </div>
        ))}
      </div>
    </div>
  );
}
