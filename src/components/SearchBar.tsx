import '../style/SearchBar.css';

type Props = {
  keyword: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ keyword, onChange }: Props) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="搜尋怪物／掉落物"
        value={keyword}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
