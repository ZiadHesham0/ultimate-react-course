export default function Button({ children, onClick, color, bgColor }) {
  return (
    <button style={{ backgroundColor: bgColor, color }} onClick={onClick}>
      {children}
    </button>
  );
}
