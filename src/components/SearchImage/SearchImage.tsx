import SearchBar from "@/components/SearchBar";
import SearchOptions from "@/components/SearchImage/SearchOptions";
import { Button } from "@/components/ui/button";

export default function SearchImage() {
  return (
    <div className="grid grid-cols-[1fr_auto] gap-2">
      <SearchBar />
      <SearchOptions />
      <Button className="col-span-2">Search</Button>
    </div>
  );
}
