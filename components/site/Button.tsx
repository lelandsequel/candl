import Link from "next/link";
import { cn } from "@/components/ui/design-system";

export function Button({
  children,
  href,
  variant = "primary",
  className,
  ...props
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
} & React.ComponentPropsWithoutRef<"a">) {
  const baseStyles =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors";
  const variants = {
    primary:
      "border border-sky-500/50 bg-sky-500/10 text-sky-100 hover:bg-sky-500/20 shadow-lg shadow-sky-900/20",
    secondary:
      "border border-slate-700 bg-slate-950/60 text-slate-100 hover:bg-slate-900/90 backdrop-blur-sm",
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href="#" className={classes} {...props}>
      {children}
    </a>
  );
}
