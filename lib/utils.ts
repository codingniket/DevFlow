import { techMap } from "@/constants/techMap";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getDevIconClassName = (name: string) => {
  const normalizedName = name.replace(/[ .]/g,"").toLowerCase();
  return techMap[normalizedName] ?  `${techMap[normalizedName]} colored` : "devicon-devicon-plain";
}