import { cn } from "@/lib/utils";

export function ScrollRow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide",
        "-mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0",
        className
      )}
    >
      {children}
    </div>
  );
}

export function ScrollRowItem({
  children,
  className,
  width = "w-[min(82vw,300px)]",
}: {
  children: React.ReactNode;
  className?: string;
  width?: string;
}) {
  return <div className={cn("snap-start shrink-0", width, className)}>{children}</div>;
}
