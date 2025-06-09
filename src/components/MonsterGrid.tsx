import MonsterCard from './MonsterCard';
import '../style/MonsterGrid.css' 
 
type Monster = {
  id: number;
  name: string;
  level: number;
  drops: { id: string; name: string; img: string }[];
};

type Props = {
  monsters: Monster[];
};


export default function MonsterGrid({ monsters }: Props) {
  return (
    <div className="monster-grid">
      {monsters.map(m => <MonsterCard key={m.id} monster={m} />)}
    </div>
  );
}
