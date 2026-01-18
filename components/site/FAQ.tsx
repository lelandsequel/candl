import { cn } from "@/components/ui/design-system";

export function FAQ({
  question,
  answer,
  className,
}: {
  question: string;
  answer: string;
  className?: string;
}) {
  return (
    <div className={cn("border-b border-slate-800 py-6", className)}>
      <h3 className="text-lg font-semibold text-slate-50">{question}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{answer}</p>
    </div>
  );
}
