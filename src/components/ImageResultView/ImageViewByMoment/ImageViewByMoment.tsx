import { ClusterEntity } from "@/types/entities/cluster.type";
import VideoThumbnailCard from "@/components/VideoThumbnailCard";

export interface ImageViewByMomentProps {
  clusters: ClusterEntity[];
}

export default function ImageViewByMoment({
  clusters,
}: ImageViewByMomentProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {clusters.map((cluster) =>
        cluster.image_list.map((image) => (
          <VideoThumbnailCard
            key={image.id}
            title={image.id}
            description={image.name}
            thumbnailUrl={image.path}
          />
        )),
      )}
    </div>
  );
}
