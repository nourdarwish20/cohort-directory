import type { Member } from "../types";

type StatsBarProps = {
  members: Member[];
  score: number;
};

function StatsBar({ members, score }: StatsBarProps) {
  const total = members.length;

  const seniors = members.filter((member) => member.level === "senior").length;

  const juniors = members.filter((member) => member.level === "junior").length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
      <div className="bg-slate-800 rounded-lg p-4">
        <p className="text-2xl font-bold text-white">{total}</p>
        <p className="text-sm text-slate-400">MEMBERS</p>
      </div>

      <div className="bg-slate-800 rounded-lg p-4">
        <p className="text-2xl font-bold text-green-400">{seniors}</p>
        <p className="text-sm text-slate-400">SENIORS</p>
      </div>

      <div className="bg-slate-800 rounded-lg p-4">
        <p className="text-2xl font-bold text-yellow-400">{juniors}</p>
        <p className="text-sm text-slate-400">JUNIORS</p>
      </div>

      <div className="bg-slate-800 rounded-lg p-4">
        <p className="text-2xl font-bold text-blue-400">{score}</p>
        <p className="text-sm text-slate-400">COHORT SCORE</p>
      </div>
    </div>
  );
}

export default StatsBar;
