export function HomePrinciplesSkeleton() {
  return (
    <section className="bg-navy py-16" aria-hidden>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse">
        <div className="h-4 w-24 bg-slate-700 rounded mb-3" />
        <div className="h-8 w-80 max-w-full bg-slate-700 rounded mb-8" />
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 grid grid-cols-2 gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-16 bg-slate-800 rounded-lg" />
            ))}
          </div>
          <div className="lg:col-span-3 h-48 bg-slate-800 rounded-xl" />
        </div>
      </div>
    </section>
  );
}
