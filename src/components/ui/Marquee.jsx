import React from 'react';

/**
 * Seamless infinite horizontal marquee of pill badges.
 * Pure CSS animation (see `.animate-marquee` in index.css), pauses on hover,
 * with soft fade-out gradients on both edges. Dependency-free.
 *
 * @param {{ items: string[] }} props
 */
const Marquee = ({ items = [] }) => {
  if (items.length === 0) return null;

  // Duplicate the list so the -50% translation loops seamlessly.
  const loop = [...items, ...items];

  return (
    <div className="group relative w-full overflow-hidden py-2">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-dark to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-dark to-transparent" />

      <ul className="animate-marquee flex w-max items-center gap-3 group-hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <li
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-primary/40 hover:text-white"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Marquee;
