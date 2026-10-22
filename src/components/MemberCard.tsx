import type { Member } from "../types";

type MemberCardProps = {
  member: Member;
  onRemove: (id: number) => void;
  onContact: (id: number) => void;
};

function MemberCard({ member, onRemove, onContact }: MemberCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900">{member.name}</h2>

      <p className="text-gray-600">{member.title}</p>

      <p className="text-sm text-gray-500 my-2">{member.quote}</p>

      <p className="text-sm text-gray-500">{member.email}</p>

      <p
        className={
          member.level === "senior"
            ? "text-green-600 font-medium mt-2"
            : "text-blue-600 font-medium mt-2"
        }
      >
        {member.level}
      </p>

      <div className="flex gap-2 mt-3">
        <button
          onClick={() => onContact(member.id)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg"
        >
          Contact
        </button>

        <button
          onClick={() => onRemove(member.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default MemberCard;
