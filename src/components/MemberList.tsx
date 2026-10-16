import MemberCard from "./MemberCard";

type Student = {
  id: number;
  name: string;
  role: string;
  active: boolean;
};

type MemberListProps = {
  students: Student[];
};

function MemberList({ students }: MemberListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {students.map((student) => (
        <MemberCard
          key={student.id}
          name={student.name}
          role={student.role}
          active={student.active}
        />
      ))}
    </div>
  );
}

export default MemberList;
