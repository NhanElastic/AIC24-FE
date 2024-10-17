import { Input } from "@/components/ui/input";
import { FormEventHandler } from "react";

export interface SearchBarProps {
  onInput: FormEventHandler<HTMLInputElement>;
}

export default function SearchBar({ onInput }: SearchBarProps) {
  return <Input placeholder="Search..." onInput={onInput} />;
}
