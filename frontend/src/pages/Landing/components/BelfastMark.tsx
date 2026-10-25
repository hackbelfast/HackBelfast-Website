import { useId } from "react";

type BelfastMarkProps = {
  className?: string;
};

const BelfastMark = ({ className }: BelfastMarkProps) => {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 250 232"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1="40"
          y1="30"
          x2="150"
          y2="220"
        >
          <stop offset="0" stopColor="#F9E35C" />
          <stop offset="0.22" stopColor="#F4A24A" />
          <stop offset="0.42" stopColor="#EF4B5C" />
          <stop offset="0.6" stopColor="#E03FAE" />
          <stop offset="0.78" stopColor="#A23FD8" />
          <stop offset="1" stopColor="#5A2BE6" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        d="M52 22 132 2 145 85 247 55 227 128 158 150 155 178 85 230 72 200 38 195 8 140 52 120 2 105 30 45 58 62Z"
      />
    </svg>
  );
};

export default BelfastMark;
