enum ARROW_DIRECTION {
  UP = "rotate-180",
  RIGHT = "rotate-[270deg]",
  DOWN = "rotate-0",
  LEFT = "rotate-90",
}

interface Props {
  size: number;
  to: keyof typeof ARROW_DIRECTION;
}

export default function ArrowIcon({ size, to }: Props) {
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
      className={`lucide lucide-arrow-down-icon lucide-arrow-down ${ARROW_DIRECTION[to]}`}
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}
