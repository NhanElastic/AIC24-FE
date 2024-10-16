import Image from "next/image";
import PtnkLogo from "@/public/ptnk-logo-1600.webp";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import { cva, cx } from "class-variance-authority";

export const navBarBreakpoints = cva("", {
  variants: {
    size: {
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-screen-2xl",
    },
  },
});

export interface NavBarProps extends VariantProps<typeof navBarBreakpoints> {
  className?: string;
}

export default function NavBar({ className, size }: NavBarProps) {
  return (
    <div
      className={cn(
        "flex w-full justify-center bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-full items-center justify-between gap-4 p-4",
          cx(navBarBreakpoints({ size })),
        )}
      >
        <b className="lg:text-2xl">Advanced Video Browsing System</b>
        <div className="flex items-center gap-2 lg:gap-4">
          <Image
            src={PtnkLogo.src}
            alt=""
            width="40"
            height="40"
            className="size-6 text-sm lg:size-10 lg:text-base"
          />
          Trường Phổ thông Năng khiếu, ĐHQG-HCM
        </div>
      </div>
    </div>
  );
}
