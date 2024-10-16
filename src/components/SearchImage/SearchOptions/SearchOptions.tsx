import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectProps } from "@radix-ui/react-select";
import { cn } from "@/lib/utils";

export interface SearchOptionsProps extends Omit<SelectProps, "children"> {
  className?: string;
}

export const searchOptions = [
  { label: "Text", value: "text" },
  { label: "Visual", value: "visual" },
  { label: "Related", value: "related" },
  { label: "Feedback", value: "feedback" },
];

export default function SearchOptions({
  className,
  ...props
}: SearchOptionsProps) {
  return (
    <Select {...props} defaultValue={searchOptions[0].value}>
      <SelectTrigger className={cn("min-w-28", className)}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {searchOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
