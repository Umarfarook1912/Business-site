export function ConsultationFormField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy mb-1.5">{label}</label>
      <input
        type={type}
        autoComplete="off"
        data-lpignore="true"
        data-1p-ignore="true"
        data-np-autofill-ignore="true"
        className="w-full border border-border-light rounded-lg px-4 py-3 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:border-sky"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
