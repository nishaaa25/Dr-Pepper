export default function RightArrowIcon({ width, height, color }) {
  return (
    <div className="inline-block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        id="arrow"
      >
        <path d="M0 0h48v48H0z" fill="none"></path>
        <path
          d="m24 8-2.83 2.83L32.34 22H8v4h24.34L21.17 37.17 24 40l16-16z"
          fill={color}
        ></path>
      </svg>
    </div>
  );
}
