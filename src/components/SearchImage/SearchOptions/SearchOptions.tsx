import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectProps } from "@radix-ui/react-select";
import { cn } from "@/lib/utils";
import { JSX } from "react/jsx-runtime";
import IntrinsicAttributes = JSX.IntrinsicAttributes;

export interface SearchOptionsProps
  extends Omit<SelectProps, "children">,
    IntrinsicAttributes {
  className?: string;
  options: { label: string; value: string }[];
}

export default function SearchOptions({
  className,
  options,
  ...props
}: SearchOptionsProps) {
  return (
    <Select {...props}>
      <SelectTrigger className={cn("w-36", className)}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
