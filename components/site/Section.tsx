import { cn } from "@/components/ui/design-system";
import { Container } from "./Container";

export function Section({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section className={cn("py-24", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
