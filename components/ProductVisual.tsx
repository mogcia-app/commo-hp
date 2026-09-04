type ProductVisualProps = {
  variant?: "hero" | "survey" | "segment" | "miniPage" | "dashboard";
};

export default function ProductVisual({ variant = "hero" }: ProductVisualProps) {
  const shape = variant === "hero" ? "min-h-[460px]" : "aspect-[16/10]";

  return (
    <div className={`relative overflow-hidden rounded-[32px] bg-brand-50 ${shape}`} aria-hidden="true">
      <div className="absolute inset-6 rounded-[24px] border border-dashed border-brand-100 bg-white/65" />
      <div className="ui-float absolute left-[12%] top-[18%] h-24 w-32 rounded-2xl bg-white shadow-soft" />
      <div className="ui-float-delay absolute right-[12%] top-[28%] h-32 w-44 rounded-2xl bg-white shadow-soft" />
      <div className="ui-float-slow absolute bottom-[16%] left-[24%] h-28 w-48 rounded-2xl bg-white shadow-soft" />
    </div>
  );
}
