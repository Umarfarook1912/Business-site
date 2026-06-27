export default function Loading() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[50vh] bg-off-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-sky/20 border-t-sky animate-spin" />
        <p className="text-xs font-medium text-slate-500 tracking-wide">Loading…</p>
      </div>
    </div>
  );
}
