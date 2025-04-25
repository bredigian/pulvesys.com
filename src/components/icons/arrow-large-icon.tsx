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

export default function ArrowLargeIcon({ size, to }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-move-right-icon lucide-move-right shrink-0 ${ARROW_DIRECTION[to]}`}
    >
      <path d="M8 18L12 22L16 18" />
      <path d="M12 2V22" />
    </svg>
  );
}
