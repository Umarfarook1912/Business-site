import Image from "next/image";
import type { TechLogoProps } from "@/types/ui/tech-logo";

export function TechLogo({ name, logo, size = 32 }: TechLogoProps) {
  return (
    <Image
      src={logo}
      alt={`${name} logo`}
      width={size}
      height={size}
      className="object-contain"
      unoptimized
    />
  );
}
