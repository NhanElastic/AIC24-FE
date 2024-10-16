import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export interface VideoThumbnailCardProps {
  title: string;
  description: string;
  thumbnailUrl: string;
}

export default function VideoThumbnailCard({
  title,
  description,
  thumbnailUrl,
}: VideoThumbnailCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={thumbnailUrl}
          alt=""
          width={320}
          height={180}
          className="rounded-lg"
        />
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-2">
        <Button>Submit</Button>
        <Button variant="secondary">Find similarity</Button>
      </CardFooter>
    </Card>
  );
}
