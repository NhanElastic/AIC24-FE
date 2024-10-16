import { useContext } from "react";
import { ImageResultContext } from "@/contexts/ImageResultContext";
import ImageViewByCluster from "@/components/ImageResultView/ImageViewByCluster/ImageViewByCluster";
import ImageViewByMoment from "@/components/ImageResultView/ImageViewByMoment/ImageViewByMoment";

export default function ImageResultView() {
  const [{ mode, clusters }] = useContext(ImageResultContext);

  return mode === "location" ? (
    <ImageViewByCluster clusters={clusters} />
  ) : (
    <ImageViewByMoment clusters={clusters} />
  );
}
