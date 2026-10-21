export default function ErrorMessage({ message }) {
  return (
    <div
      className="rounded-2xl border border-red-200 bg-red-50 px-6 py-10 text-center"
      role="alert"
    >
      <p className="text-base font-semibold text-red-800">
        Something went wrong
      </p>
      <p className="mt-2 text-sm text-red-700">{message}</p>
    </div>
  );
}
