const ITEMS = [
  "3D AI ANIMATION",
  "CARTOON STORIES",
  "CUSTOM CHARACTERS",
  "SHORT-FORM VIDEO",
  "DONE-FOR-YOU VIDEOS",
  "THE BLUEPRINT — $13.99",
];

export default function Ticker() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-line bg-coal py-4" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center">
            {row.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center font-display text-lg tracking-wider whitespace-nowrap text-white/85"
              >
                <span className="px-6">{item}</span>
                <span className="h-2 w-2 rotate-45 bg-crimson shadow-[0_0_10px_#ff152f]" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
