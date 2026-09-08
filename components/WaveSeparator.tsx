export function WaveSeparator({
  fromColor = "#FFFCF1",
  toColor = "#FFFFFF",
}: {
  fromColor?: string;
  toColor?: string;
}) {
  return (
    <div
      className="w-full overflow-hidden leading-none -mb-px"
      style={{ backgroundColor: toColor }}
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full"
        aria-hidden="true"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z"
          fill={fromColor}
        />
      </svg>
    </div>
  );
}

export default WaveSeparator;
