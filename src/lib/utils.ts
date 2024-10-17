import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ImageEntity } from "@/types/entities/image.type";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageUrl(image: ImageEntity) {
  return `${process.env.IMAGE_BASE_URL}/${image.path}/${image.id}.webp`;
}
