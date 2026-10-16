type SearchBarProps = {
  search: string;
  setSearch: (value: string) => void;
};

function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search students..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full border border-gray-300 rounded-lg p-3"
    />
  );
}

export default SearchBar;
