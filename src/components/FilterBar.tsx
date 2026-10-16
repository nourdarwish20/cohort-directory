type FilterBarProps = {
  filter: string;
  setFilter: (value: string) => void;
};

function FilterBar({ setFilter }: FilterBarProps) {
  return (
    <div className="flex gap-3 mt-4">
      <button
        onClick={() => setFilter("All")}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        All
      </button>

      <button
        onClick={() => setFilter("Active")}
        className="bg-green-600 text-white px-4 py-2 rounded-lg"
      >
        Active
      </button>

      <button
        onClick={() => setFilter("Inactive")}
        className="bg-gray-600 text-white px-4 py-2 rounded-lg"
      >
        Inactive
      </button>
    </div>
  );
}

export default FilterBar;
