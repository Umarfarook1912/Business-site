import { CONSULTATION_STEPS } from "@/lib/constants";

type Props = {
  step: number;
  onStepClick: (index: number) => void;
};

export function ConsultationStepIndicator({ step, onStepClick }: Props) {
  return (
    <>
      <div className="sm:hidden mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wide">
            Step {step + 1} of {CONSULTATION_STEPS.length}
          </span>
          <span className="text-xs font-semibold text-sky">{CONSULTATION_STEPS[step]}</span>
        </div>
        <div className="flex gap-1">
          {CONSULTATION_STEPS.map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-colors ${i <= step ? "bg-sky" : "bg-slate-200"}`}
            />
          ))}
        </div>
      </div>

      <div className="hidden sm:flex flex-wrap items-center gap-2 mb-8">
        {CONSULTATION_STEPS.map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => i < step && onStepClick(i)}
              className={`text-xs font-medium px-3 py-1 rounded-full transition-colors ${
                i === step
                  ? "bg-sky text-white"
                  : i < step
                  ? "bg-sky/20 text-sky cursor-pointer"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              {label}
            </button>
            {i < CONSULTATION_STEPS.length - 1 && (
              <div className={`h-px w-4 lg:w-6 ${i < step ? "bg-sky" : "bg-slate-200"}`} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
