export function HomeConsultationSkeleton() {
  return (
    <section className="bg-off-white py-20" aria-hidden>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="h-4 w-20 bg-slate-200 rounded" />
            <div className="h-8 w-64 bg-slate-200 rounded" />
            <div className="h-4 w-full bg-slate-200 rounded" />
          </div>
          <div className="h-72 bg-white border border-slate-200 rounded-xl" />
        </div>
      </div>
    </section>
  );
}
