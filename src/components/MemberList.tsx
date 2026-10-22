import MemberCard from "./MemberCard";
import type { Member } from "../types";

type MemberListProps = {
  members: Member[];
  onRemove: (id: number) => void;
  onContact: (id: number) => void;
};

function MemberList({ members, onRemove, onContact }: MemberListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
      {members.map((member) => (
        <MemberCard
          key={member.id}
          member={member}
          onRemove={onRemove}
          onContact={onContact}
        />
      ))}
    </div>
  );
}

export default MemberList;
