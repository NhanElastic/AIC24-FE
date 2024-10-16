import { useContext, useState } from "react";
import { ImageResultContext } from "@/contexts/ImageResultContext";
import ViewModeSelect from "@/components/ImageResultView/ViewModeSelect";
import ImageViewByCluster from "@/components/ImageResultView/ImageViewByCluster/ImageViewByCluster";

export default function ImageResultView() {
  const [clusters] = useContext(ImageResultContext);
  const [viewMode, setViewMode] = useState<"moment" | "cluster">("moment");

  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="my-2 text-3xl font-bold">Video Thumbnail</div>
        <ViewModeSelect onValueChange={setViewMode} />
      </div>

      {viewMode === "cluster" ? (
        <ImageViewByCluster clusters={clusters} />
      ) : null}
    </div>
  );
}
