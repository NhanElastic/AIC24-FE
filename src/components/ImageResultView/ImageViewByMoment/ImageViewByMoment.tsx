import ImageCard from "../ImageCard";
import { useState } from "react";
import PaginationBar from "@/components/ImageResultView/PaginationBar";
import { ClusterEntity } from "@/types/entities/cluster.type";

export interface ImageViewByMomentProps {
  clusters: ClusterEntity[];
}

const momentsPerPage = 18;

export default function ImageViewByMoment({
  clusters,
}: ImageViewByMomentProps) {
  const [pageNumber, setPageNumber] = useState(1);
  const totalPage = Math.ceil(clusters.length / momentsPerPage);

  const startImagesIndex = (pageNumber - 1) * momentsPerPage;
  const endImagesIndex = Math.min(pageNumber * momentsPerPage, clusters.length);

  console.log(pageNumber);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {clusters
        .slice(startImagesIndex, endImagesIndex)
        .map((cluster) =>
          cluster.image_list.map((image) => (
            <ImageCard key={image.id} image={image} />
          )),
        )}

      <PaginationBar
        className="self-center sm:col-span-2 lg:col-span-3"
        totalPage={totalPage}
        onPageChange={setPageNumber}
      />
    </div>
  );
}
