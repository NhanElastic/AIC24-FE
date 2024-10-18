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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

export interface ClusterViewProps {
  cluster: ClusterEntity;
}

export default function ClusterView({ cluster }: ClusterViewProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <div>
          <CardTitle>{cluster.cluster_name}</CardTitle>
          {cluster.url && (
            <CardDescription>
              <Link
                href={cluster.url}
                target="_blank"
                className="underline underline-offset-2"
              >
                {cluster.url}
              </Link>
            </CardDescription>
          )}
        </div>

        <Button>Submit all</Button>
      </CardHeader>

      <CardContent>
        <ScrollArea>
          <div className="flex">
            {cluster.image_list.map((image) => (
              <ImageMomentCard
                hideTitle
                key={image.id}
                image={image}
                className="w-80"
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
