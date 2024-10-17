import { ClusterEntity } from "@/types/entities/cluster.type";
import ImageMomentCard from "../../ImageMomentCard";

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
          <ImageMomentCard key={image.id} image={image} />
        )),
      )}
    </div>
  );
}
