import MemberList from "./components/MemberList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import FilterBar from "./components/FilterBar";
import EmptyState from "./components/EmptyState";

const students = [
  { id: 1, name: "Sara", role: "Frontend Developer", active: true },
  { id: 2, name: "Nour", role: "Data Scientist", active: true },
  { id: 3, name: "Ali", role: "Backend Developer", active: false },
];

function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      filter === "All" ||
      (filter === "Active" && student.active === true) ||
      (filter === "Inactive" && student.active === false);

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <FilterBar filter={filter} setFilter={setFilter} />
      {filteredStudents.length === 0 ? (
        <EmptyState />
      ) : (
        <MemberList students={filteredStudents} />
      )}
    </div>
  );
}

export default App;

// <MemberCard name="Sara" role="Frontend Developer" active={true} />
// <MemberCard name="Nour" role="Data Scientist" active={true} />
// <MemberCard name="Ali" role=" Backend Developer" active={false} />
