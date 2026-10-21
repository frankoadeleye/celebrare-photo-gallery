export default function LoadingSpinner() {
  return (
    <div
      className="flex min-h-64 flex-col items-center justify-center gap-4"
      role="status"
      aria-live="polite"
    >
      <div
        className="size-10 animate-spin rounded-full border-4 border-violet-100 border-t-violet-600"
        aria-hidden="true"
      />
      <p className="text-sm font-medium text-zinc-500">
        Gathering beautiful photographs...
      </p>
    </div>
  );
}
