type Props = {
  label: string;
  count: number;
  variant: "red" | "orange" | "green";
};

const styles = {
  red: "bg-red-50 text-red-600 border-red-200",
  orange: "bg-orange-50 text-orange-600 border-orange-200",
  green: "bg-green-50 text-green-600 border-green-200",
};

const StatusChip = ({ label, count, variant }: Props) => {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-1.5 border rounded-full text-sm font-medium ${styles[variant]}`}
    >
      {label} {count}
    </div>
  );
};

export default StatusChip;
