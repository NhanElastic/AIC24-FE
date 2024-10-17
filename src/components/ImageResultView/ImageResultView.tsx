import { useContext, useMemo, useState } from "react";
import { ImageResultContext } from "@/contexts/ImageResultContext";
import ImageViewByCluster from "@/components/ImageResultView/ImageViewByCluster/ImageViewByCluster";
import ImageViewByMoment from "@/components/ImageResultView/ImageViewByMoment/ImageViewByMoment";
import { ImageEntity } from "@/types/entities/image.type";
import { ClusterEntity } from "@/types/entities/cluster.type";

export default function ImageResultView() {
  const [imageResult] = useContext(ImageResultContext);
  const [viewMode, setViewMode] = useState<"moment" | "cluster">("moment");

  console.log(imageResult);
  console.log(imageResult[0]);

  const moments: ImageEntity[] = useMemo(
    () =>
      imageResult.map((cluster: ClusterEntity) => cluster.image_list).flat(),
    [imageResult],
  );

  console.log(moments[0]);

  const clusters = useMemo(
    () =>
      Object.entries(
        Object.groupBy(moments, (moment) => moment.id.split("/")[0]),
      ).map(
        ([clusterName, imageList]): ClusterEntity => ({
          cluster_name: clusterName,
          image_list: imageList!,
        }),
      ),
    [moments],
  );

  return viewMode === "cluster" ? (
    <ImageViewByCluster clusters={clusters} />
  ) : (
    <ImageViewByMoment clusters={imageResult} />
  );
}
