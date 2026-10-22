import { useState, useEffect, useRef, useMemo } from "react";

import MemberList from "./components/MemberList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import EmptyState from "./components/EmptyState";

import type { Member, ApiUser, Filter } from "./types";
import { computeCohortScore } from "./utils/computeCohortScore";

function App() {
  // State
  const [members, setMembers] = useState<Member[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Remember our timer
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Fetch members when the limit changes
  useEffect(() => {
    const controller = new AbortController();

    async function getUsers() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?_limit=${limit}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Could not fetch members");
        }

        const data: ApiUser[] = await response.json();

        // Convert API users to Sami's Member format
        const formattedMembers: Member[] = data.map((user) => ({
          id: user.id,
          name: user.name,
          title: user.username,
          quote: user.company.bs,
          email: user.email,
          level: user.id % 2 === 0 ? "senior" : "junior",
        }));

        if (!controller.signal.aborted) {
          setMembers(formattedMembers);
        }
      } catch (err) {
        if (!controller.signal.aborted) {
          setError("Could not load members.");
          console.error(err);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    timerRef.current = setTimeout(() => {
      getUsers();
    }, 500);

    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
      controller.abort();
    };
  }, [limit]);

  // Search and filter
  const filteredMembers = members.filter((member) => {
    const matchesSearch = member.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLevel = filter === "all" || member.level === filter;

    return matchesSearch && matchesLevel;
  });

  // Remove member locally
  function removeMember(id: number) {
    setMembers((previous) => previous.filter((member) => member.id !== id));
  }

  // Sami's actual score calculation
  const score = useMemo(() => {
    return computeCohortScore(members);
  }, [members]);

  // Log on render
  console.log("App rendered!", Math.random());

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <Header />

      <div className="my-4">
        <p>Total members: {members.length}</p>
        <p className="font-bold text-blue-600">Cohort Score: {score}</p>
      </div>

      <div className="my-4">
        <label htmlFor="member-limit" className="mr-3">
          Number of members:
        </label>

        <select
          id="member-limit"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          className="border border-gray-300 rounded-lg p-2"
        >
          <option value={3}>3 users</option>
          <option value={5}>5 users</option>
          <option value={10}>10 users</option>
        </select>
      </div>

      <SearchBar search={search} setSearch={setSearch} />

      <div className="flex gap-3 my-4">
        {(["all", "junior", "senior"] as Filter[]).map((option) => (
          <button
            key={option}
            onClick={() => setFilter(option)}
            className={`px-4 py-2 rounded-lg ${
              filter === option
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      {loading ? (
        <p>Loading members...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : filteredMembers.length === 0 ? (
        <EmptyState />
      ) : (
        <MemberList members={filteredMembers} onRemove={removeMember} />
      )}
    </div>
  );
}

export default App;
