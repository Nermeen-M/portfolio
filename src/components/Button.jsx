// This is important to observe. This component is well written but notice that it does not provide anything special. It can be a normal HTML compoment

export default function Button({ onClick, label, className }) {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
}
