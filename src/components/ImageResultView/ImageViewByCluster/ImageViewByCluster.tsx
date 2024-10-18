import { ClusterEntity } from "@/types/entities/cluster.type";
import ClusterView from "@/components/ImageResultView/ImageViewByCluster/ClusterView";
import PaginationBar from "@/components/ImageResultView/PaginationBar";
import { useState } from "react";

export interface ImageViewByClusterProps {
  clusters: ClusterEntity[];
}

const clustersPerPage = 10;

export default function ImageViewByCluster({
  clusters,
}: ImageViewByClusterProps) {
  const [pageNumber, setPageNumber] = useState(1);
  const totalPage = Math.ceil(clusters.length / clustersPerPage);

  const startClusterIndex = (pageNumber - 1) * clustersPerPage;
  const endClusterIndex = Math.min(
    pageNumber * clustersPerPage,
    clusters.length,
  );

  return (
    <div className="flex flex-col gap-4">
      {clusters.slice(startClusterIndex, endClusterIndex).map((cluster) => (
        <ClusterView key={cluster.cluster_name} cluster={cluster} />
      ))}

      <PaginationBar
        totalPage={totalPage}
        currentPage={pageNumber}
        onPageChange={setPageNumber}
      />
    </div>
  );
}
