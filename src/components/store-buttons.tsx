function GooglePlayGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden focusable="false">
      <path
        fill="#00D2FF"
        d="M47 21c-9 5-15 15-15 29v412c0 14 6 24 15 29l2 2 231-231v-12L49 19l-2 2z"
      />
      <path fill="#FFCE00" d="M355 340l-77-77v-12l77-77 2 1 91 52c26 15 26 39 0 54l-91 52-2 1z" />
      <path fill="#FF3A44" d="M357 339l-79-79L47 491c9 9 23 10 39 1l271-153" />
      <path fill="#00F076" d="M357 173L86 20C70 11 56 12 47 21l231 231 79-79z" />
    </svg>
  );
}

function AmazonGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden focusable="false">
      <path
        fill="currentColor"
        d="M247 96c-38 0-79 14-88 61 -1 5 3 8 6 8l38 4c4 0 6-3 7-7 3-16 17-24 32-24 8 0 17 3 22 10 5 8 5 19 5 28v5c-23 3-53 5-74 14 -25 11-42 32-42 64 0 41 26 61 59 61 28 0 43-7 65-29 7 11 9 16 22 27 3 2 7 2 9 0l25-22c3-3 3-7 1-10 -8-11-16-20-16-40V172c0-28 2-54-19-73C283 100 258 96 247 96zm22 130v9c0 17 1 31-8 46 -7 12-18 19-30 19 -17 0-27-13-27-32 0-37 33-44 65-44z"
      />
      <path
        fill="#FF9900"
        d="M398 350c-42 32-104 49-157 49 -74 0-141-27-192-73 -4-4 0-9 5-6 55 32 122 51 192 51 47 0 99-10 147-30C400 337 406 344 398 350zM416 329c-5-7-36-3-49-2 -4 0-5-3-1-6 24-17 64-12 69-6 5 6-1 46-24 65 -3 3-7 2-5-2C411 366 421 336 416 329z"
      />
    </svg>
  );
}

const itemClass =
  "inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card px-3 text-foreground shadow-card transition-colors hover:bg-secondary";

export function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-row items-center gap-3 ${className}`}>
      <span className={itemClass}>
        <GooglePlayGlyph className="h-5 w-5 shrink-0" />
        <span className="min-w-0 text-left leading-tight">
          <span className="block text-[9px] font-semibold uppercase tracking-wide text-muted-foreground">
            Coming Soon
          </span>
          <span className="block truncate text-xs font-bold">Google Play</span>
        </span>
      </span>

      <span className={itemClass}>
        <AmazonGlyph className="h-5 w-5 shrink-0" />
        <span className="min-w-0 text-left leading-tight">
          <span className="block text-[9px] font-semibold uppercase tracking-wide text-muted-foreground">
            In Review
          </span>
          <span className="block truncate text-xs font-bold">Amazon Appstore</span>
        </span>
      </span>
    </div>
  );
}
