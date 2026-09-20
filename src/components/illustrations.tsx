export function SmileSketch() {
  return (
    <svg viewBox="0 0 160 120" className="h-full w-full" aria-hidden>
      <rect width="160" height="120" fill="#fff1f5" />
      <circle cx="80" cy="58" r="34" fill="#fecdd3" />
      <circle cx="68" cy="52" r="4" fill="#9f1239" />
      <circle cx="92" cy="52" r="4" fill="#9f1239" />
      <path
        d="M64 70c6 10 26 10 32 0"
        fill="none"
        stroke="#9f1239"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M118 28c8 4 14 14 12 24" fill="none" stroke="#fb7185" strokeWidth="2" />
      <circle cx="132" cy="26" r="5" fill="#f43f5e" />
    </svg>
  );
}

export function NotesSketch() {
  return (
    <svg viewBox="0 0 160 120" className="h-full w-full" aria-hidden>
      <rect width="160" height="120" fill="#ffe4ee" />
      <rect x="22" y="28" width="54" height="72" rx="10" fill="white" />
      <rect x="84" y="20" width="54" height="72" rx="10" fill="#fb7185" />
      <circle cx="49" cy="86" r="4" fill="#fda4af" />
      <circle cx="111" cy="78" r="4" fill="white" />
      <text x="32" y="48" fontSize="10" fill="#9f1239">
        hi em
      </text>
      <text x="94" y="42" fontSize="10" fill="white">
        ♡ anh
      </text>
    </svg>
  );
}

export function StaySketch() {
  return (
    <svg viewBox="0 0 160 120" className="h-full w-full" aria-hidden>
      <rect width="160" height="120" fill="#fff7f9" />
      <circle cx="118" cy="28" r="14" fill="#fda4af" />
      <path d="M20 98c20-28 40-28 60 0" fill="#fecdd3" />
      <path d="M80 98c22-32 46-30 64 0" fill="#fb7185" />
      <circle cx="58" cy="62" r="10" fill="#9f1239" />
      <circle cx="98" cy="60" r="10" fill="#be123c" />
      <path d="M48 48c16-18 48-18 64 2" fill="none" stroke="#f43f5e" strokeWidth="4" />
    </svg>
  );
}

export function CoupleSketch({ className = "h-44 w-44" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <circle cx="100" cy="100" r="90" fill="#ffe4ee" />
      <circle cx="142" cy="48" r="18" fill="#fda4af" opacity="0.8" />
      <path d="M58 150c18-46 36-46 42 0" fill="#fb7185" />
      <path d="M98 150c20-52 48-48 52 0" fill="#f43f5e" />
      <circle cx="78" cy="96" r="16" fill="#9f1239" />
      <circle cx="122" cy="92" r="16" fill="#be123c" />
      <path
        d="M100 118c8 10 22 8 24-2"
        fill="none"
        stroke="#9f1239"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M100 72c-18-22-46-8-38 18 12 4 26-2 38-18 12 16 26 22 38 18 8-26-20-40-38-18z"
        fill="#f43f5e"
      />
    </svg>
  );
}
