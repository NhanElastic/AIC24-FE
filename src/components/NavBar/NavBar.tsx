import Image from "next/image";
import PtnkLogo from "@/public/ptnk-logo-1600.webp";
import { cn } from "@/lib/utils";

export interface NavBarProps {
  className?: string;
}

export default function NavBar({ className }: NavBarProps) {
  return (
    <div
      className={cn(
        "flex w-full justify-center bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-full max-w-screen-lg items-center justify-between gap-4 p-4 xl:max-w-screen-xl",
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
