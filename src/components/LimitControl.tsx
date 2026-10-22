type LimitControlProps = {
  limit: number;
  onLimitChange: (value: number) => void;
};

function LimitControl({ limit, onLimitChange }: LimitControlProps) {
  return (
    <div className="flex items-center gap-2 my-4">
      <label htmlFor="member-limit">Fetch</label>

      <input
        id="member-limit"
        type="number"
        min={1}
        max={10}
        value={limit}
        onChange={(e) => {
          const value = Number(e.target.value);

          if (value >= 1 && value <= 10) {
            onLimitChange(value);
          }
        }}
        className="border rounded-lg p-2 w-20"
      />

      <span>members</span>
    </div>
  );
}

export default LimitControl;
