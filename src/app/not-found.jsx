import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-error">404</h1>
        <p className="py-4 text-lg">Oops! Page not found</p>

        <Link href="/">
          <button className="btn btn-primary">
            ⬅ Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}