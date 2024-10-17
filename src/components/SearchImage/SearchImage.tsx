import SearchBar from "@/components/SearchBar";
import SearchOptions from "@/components/SearchImage/SearchOptions";
import { Button } from "@/components/ui/button";
import { fetchImagesByText } from "@/lib/fetch";
import { useContext, useState } from "react";
import { ImageResultContext } from "@/contexts/ImageResultContext";

export default function SearchImage() {
  const [query, setQuery] = useState("");
  const [, setSearchResults] = useContext(ImageResultContext);

  const fetchSearchResults = async () => {
    const result = await fetchImagesByText(query);
    setSearchResults(result);
    console.log(result);
  };

  return (
    <div className="grid grid-cols-[1fr_auto] gap-2">
      <SearchBar onInput={(e) => setQuery(e.currentTarget.value)} />
      <SearchOptions />
      <Button className="col-span-2" onClick={fetchSearchResults}>
        Search
      </Button>
    </div>
  );
}
