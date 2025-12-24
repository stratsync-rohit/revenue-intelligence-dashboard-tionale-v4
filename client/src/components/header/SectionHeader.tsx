type Props = {
  title: string;
  subtitle?: string;
  stats?: {
    label: string;
    count: number;
    color: "red" | "orange" | "green";
  }[];
  rightAction?: React.ReactNode;
};

const SectionHeader = ({ title, subtitle, stats, rightAction }: Props) => {
  return (
    <div className="bg-white border-b px-6 py-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold">{title}</h1>
          {subtitle && (
            <p className="text-sm text-gray-500">{subtitle}</p>
          )}
        </div>

        <div className="flex gap-2">
          {stats?.map((s) => (
            <span
              key={s.label}
              className={`badge-${s.color}`}
            >
              {s.count} {s.label}
            </span>
          ))}
          {rightAction}
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
