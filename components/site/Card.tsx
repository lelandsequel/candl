import Link from "next/link";
import { cn } from "@/components/ui/design-system";

export function Card({
  title,
  description,
  href,
  className,
}: {
  title: string;
  description: string;
  href?: string;
  className?: string;
}) {
  const content = (
    <div
      className={cn(
        "rounded-2xl border border-slate-800 bg-slate-950/60 p-6 shadow-sm shadow-black/40 transition-all hover:border-slate-700",
        className
      )}
    >
      <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
      {description && <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block group">
        {content}
      </Link>
    );
  }

  return content;
}
