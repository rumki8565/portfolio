import Link from "next/link";

export default function NotFound() {
  return (
    <main className="wrap py-24">
      <h1 className="text-4xl font-extrabold">Page not found</h1>
      <p className="muted my-3">That page doesn’t exist. Go back to the portfolio.</p>
      <Link className="btn" href="/">Back to home</Link>
    </main>
  );
}
