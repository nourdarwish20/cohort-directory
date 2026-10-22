import { useEffect, useRef } from "react";

type SearchBarProps = {
  search: string;
  setSearch: (value: string) => void;
};

function SearchBar({ search, setSearch }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search students..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full border border-gray-300 rounded-lg p-3"
    />
  );
}

export default SearchBar;
