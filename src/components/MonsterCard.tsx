import '../style/MonsterCard.css';

// 定義 Drop 和 Monster 的型別
type DropItem = {
  id: string;
  name: string;
  img: string;
};

type Monster = {
  id: number;
  name: string;
  level: number;
  drops: DropItem[];
};

type Props = {
  monster: Monster;
};

export default function MonsterCard({ monster }: Props) {
  return (
    <div className="monster-card">
      <img src={`assets/${monster.name}.png`} alt={monster.name} />
      <h3>{monster.name}</h3>
      <p className="lvl">等級：{monster.level}</p>
      <div className="drops">
        {monster.drops.map((item) => (
          <img
            key={item.id}
            src={item.img}
            title={item.name}
            alt={item.name}
          />
        ))}
      </div>
    </div>
  );
}
