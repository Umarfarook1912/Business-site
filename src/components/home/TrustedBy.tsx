import { HOME_TRUSTED } from "@/lib/constants";

export function TrustedBy() {
  return (
    <section className="bg-white border-y border-border-light py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
          {HOME_TRUSTED.label}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {HOME_TRUSTED.logos.map((name) => (
            <div
              key={name}
              className="text-slate-400 font-semibold text-sm tracking-wide uppercase hover:text-charcoal transition-colors cursor-default select-none"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
