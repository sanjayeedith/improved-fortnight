import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-mono font-bold">Page not found</h1>
        <p className="text-white/70 font-mono">The page you’re looking for doesn’t exist.</p>
        <Link href="/" className="text-orange-500 font-mono underline">Go back home</Link>
      </div>
    </main>
  );
}
