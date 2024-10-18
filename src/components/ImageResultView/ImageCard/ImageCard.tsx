import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ImageEntity } from "@/types/entities/image.type";
import { cn, getImageUrl } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RelevantImagesDialog from "@/components/ImageResultView/RelevantImagesDialog";

export interface VideoThumbnailCardProps {
  image: ImageEntity;
  hideTitle?: boolean;
  className?: string;
}

export default function ImageCard({
  image,
  hideTitle = false,
  className,
}: VideoThumbnailCardProps) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="py-4">
        {!hideTitle && <CardTitle className="text-base">{image.id}</CardTitle>}
      </CardHeader>

      <CardContent>
        <Image
          src={getImageUrl(image)}
          alt=""
          width={320}
          height={180}
          className="max-h-96 w-full rounded-lg"
          loading="lazy"
        />
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-2">
        <Button className="h-full">Submit</Button>

        <RelevantImagesDialog image={image} />
      </CardFooter>
    </Card>
  );
}
