import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ClusterEntity } from "@/types/entities/cluster.type";
import ImageMomentCard from "../../../ImageMomentCard";
import Link from "next/link";
import { getImageUrl } from "@/lib/utils";

export interface ClusterViewProps {
  cluster: ClusterEntity;
}

export default function ClusterView({ cluster }: ClusterViewProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{cluster.cluster_name}</CardTitle>
        {cluster.url && (
          <CardDescription>
            <Link
              href={cluster.url}
              target="_blank"
              className="underline underline-offset-2"
            >
              {cluster.url}{" "}
            </Link>
          </CardDescription>
        )}
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cluster.image_list.map((image) => (
            <ImageMomentCard key={image.id} image={image} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
