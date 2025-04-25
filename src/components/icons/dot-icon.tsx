interface Props {
  size: number;
}

export default function DotIcon({ size }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-dot-icon lucide-dot shrink-0"
    >
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  );
}
