import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export interface VideoThumbnailCardProps {
  title: string;
  thumbnailUrl: string;
}

export default function VideoThumbnailCard({
  title,
  thumbnailUrl,
}: VideoThumbnailCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <Image
          src={thumbnailUrl}
          alt=""
          width={320}
          height={180}
          className="max-h-96 w-full rounded-lg"
          loading="lazy"
        />
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-2">
        <Button>Submit</Button>
        <Button variant="secondary">Find similarity</Button>
      </CardFooter>
    </Card>
  );
}
