import { useState, useEffect, useRef, useMemo } from "react";

import MemberList from "./components/MemberList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import EmptyState from "./components/EmptyState";
import LimitControl from "./components/LimitControl";
import StatsBar from "./components/StatsBar";

import type { Member, ApiUser, Filter } from "./types";
import { computeCohortScore } from "./utils/computeCohortScore";

function App() {
  // 1. State
  const [members, setMembers] = useState<Member[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [limit, setLimit] = useState(6);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 2. Refs
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Store activity without causing extra re-renders
  const activityRef = useRef<string[]>([]);

  // Count API requests without causing extra re-renders
  const fetchCountRef = useRef(0);

  // 3. Record user activity
  function recordActivity(message: string) {
    activityRef.current.push(message);
    console.log("Session Activity:", [...activityRef.current]);
  }

  // Record search changes
  function handleSearchChange(value: string) {
    recordActivity(`Search: ${value}`);
    setSearch(value);
  }

  // Record filter changes
  function handleFilterChange(value: Filter) {
    recordActivity(`Filter: ${value}`);
    setFilter(value);
  }

  // Record limit changes
  function handleLimitChange(value: number) {
    recordActivity(`Limit: ${value}`);
    setLimit(value);
  }

  // 4. Fetch members from the API
  useEffect(() => {
    const controller = new AbortController();

    async function getUsers() {
      setLoading(true);
      setError("");

      try {
        // Count this API request
        fetchCountRef.current += 1;

        // Fetch members
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?_limit=${limit}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Could not fetch members");
        }

        const data: ApiUser[] = await response.json();

        // Convert API users to Member format
        const formattedMembers: Member[] = data.map((user) => ({
          id: user.id,
          name: user.name,
          title: user.username,
          quote: user.company.bs,
          email: user.email,
          level: user.id % 2 === 0 ? "junior" : "senior",
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

    // Wait 500 milliseconds before fetching
    timerRef.current = setTimeout(() => {
      getUsers();
    }, 500);

    // Clean up timer and cancel previous request
    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }

      controller.abort();
    };
  }, [limit]);

  // 5. Search and filter members
  const filteredMembers = members.filter((member) => {
    const matchesSearch = member.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLevel = filter === "all" || member.level === filter;

    return matchesSearch && matchesLevel;
  });

  // 6. Remove member and record activity
  function removeMember(id: number) {
    recordActivity(`Removed member ${id}`);

    setMembers((previous) => previous.filter((member) => member.id !== id));
  }

  // 7. Contact member and record activity
  function contactMember(id: number) {
    recordActivity(`Contacted member ${id}`);
  }

  // 8. Calculate cohort score using useMemo
  const score = useMemo(() => {
    return computeCohortScore(members);
  }, [members]);

  // 9. Log each render
  console.log("App rendered!", Math.random());

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <Header />

      {/* Show Session Activity */}
      <button
        type="button"
        onClick={() => {
          console.log("Total API requests:", fetchCountRef.current);

          console.log("Activity history:", [...activityRef.current]);
        }}
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg my-4"
      >
        Show Session Activity
      </button>
      <StatsBar members={members} score={score} />

      {/* Member limit */}
      <LimitControl limit={limit} onLimitChange={handleLimitChange} />

      {/* Search */}
      <SearchBar search={search} setSearch={handleSearchChange} />

      {/* Seniority filters */}
      <div className="flex gap-3 my-4">
        {(["all", "junior", "senior"] as Filter[]).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => handleFilterChange(option)}
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

      {/* Member list */}
      {loading ? (
        <p>Loading members...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : filteredMembers.length === 0 ? (
        <EmptyState />
      ) : (
        <MemberList
          members={filteredMembers}
          onRemove={removeMember}
          onContact={contactMember}
        />
      )}
    </div>
  );
}

export default App;
