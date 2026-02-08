export default function Footer() {
  return (
    <footer className="border-t border-card-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; 2026 Campbell Solutions. All rights reserved.
        </p>
        <a
          href="#"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          Back to top &uarr;
        </a>
      </div>
    </footer>
  );
}
