import { ClusterEntity } from "@/types/entities/cluster.type";
import VideoThumbnailCard from "@/components/VideoThumbnailCard";
import ClusterView from "@/components/ImageResultView/ImageViewByCluster/ClusterView";

export interface ImageViewByClusterProps {
  clusters: ClusterEntity[];
}

export default function ImageViewByCluster({
  clusters,
}: ImageViewByClusterProps) {
  return (
    <div className="flex flex-col gap-4">
      {clusters.map((cluster) => (
        <ClusterView key={cluster.cluster_name} cluster={cluster} />
      ))}
    </div>
  );
}
