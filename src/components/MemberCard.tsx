type MemberProps = {
  name: string;
  role: string;
  active: boolean;
};

function MemberCard({ name, role, active }: MemberProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900">{name}</h2>

      <p className="text-gray-500">{role}</p>

      <p className={active ? "text-green-600" : "text-red-500"}>
        {active ? "Active" : "Inactive"}
      </p>
    </div>
  );
}

export default MemberCard;
