import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export interface ViewModeSelectProps {
  onValueChange?: (value: "moment" | "cluster") => void;
}

export default function ViewModeSelect({ onValueChange }: ViewModeSelectProps) {
  return (
    <>
      <Label>Organize by</Label>
      <Select defaultValue="moment" onValueChange={onValueChange}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="moment">Moment</SelectItem>
          <SelectItem value="cluster">Cluster</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
