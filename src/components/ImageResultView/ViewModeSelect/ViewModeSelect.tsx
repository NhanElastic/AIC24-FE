import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function ViewModeSelect() {
  return (
    <>
      <Label>View mode</Label>
      <Select defaultValue="moment">
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
