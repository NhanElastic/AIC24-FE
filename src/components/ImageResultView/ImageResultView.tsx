import { useContext } from "react";
import { ImageResultContext } from "@/contexts/ImageResultContext";
import VideoThumbnailCard from "@/components/VideoThumbnailCard";
import ViewModeSelect from "@/components/ImageResultView/ViewModeSelect";

export default function ImageResultView() {
  const [imageList] = useContext(ImageResultContext);

  return (
    <>
      <div className="my-2 text-2xl font-bold">Video Thumbnail</div>

      <ViewModeSelect />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/*{imageList.map((image) => (*/}
        {/*  <VideoThumbnailCard*/}
        {/*    key={image.id}*/}
        {/*    title={image.id}*/}
        {/*    description={image.name}*/}
        {/*    thumbnailUrl={image.path}*/}
        {/*  />*/}
        {/*))}*/}
      </div>
    </>
  );
}
