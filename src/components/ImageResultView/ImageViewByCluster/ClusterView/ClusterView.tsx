import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ClusterEntity } from "@/types/entities/cluster.type";
import VideoThumbnailCard from "@/components/VideoThumbnailCard";

export interface ClusterViewProps {
  cluster: ClusterEntity;
}

export default function ClusterView({ cluster }: ClusterViewProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{cluster.cluster_name}</CardTitle>
        {cluster.url && <CardDescription>{cluster.url}</CardDescription>}
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cluster.image_list.map((image) => (
            <VideoThumbnailCard
              key={image.id}
              title={image.id}
              description={image.name}
              thumbnailUrl={image.path}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
