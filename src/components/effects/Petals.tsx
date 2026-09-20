export function Petals() {
  const pieces = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${(i * 5.7 + 2) % 100}%`,
    delay: `${(i * 0.7) % 8}s`,
    duration: `${11 + (i % 6)}s`,
    size: 10 + (i % 5) * 4,
    kind: i % 3,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {pieces.map((p) => (
        <span
          key={p.id}
          className="falling-piece absolute top-[-8vh] text-rose-hot"
          style={{
            left: p.left,
            fontSize: p.size,
            animationDuration: `${p.duration}, ${4 + (p.id % 3)}s`,
            animationDelay: `${p.delay}, ${p.delay}`,
          }}
        >
          {p.kind === 0 ? "♥" : p.kind === 1 ? "❀" : "✿"}
        </span>
      ))}
    </div>
  );
}
