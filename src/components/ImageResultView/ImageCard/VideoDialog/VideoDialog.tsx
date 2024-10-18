import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ImageEntity } from "@/types/entities/image.type";
import { MonitorPlay } from "lucide-react";

export interface VideoDialogProps {
  image: ImageEntity;
  className?: string;
}

export default function VideoDialog({ image, className }: VideoDialogProps) {
  const videoId = image.id.split("/")[0];

  console.log(image);

  const handleVideoMounted = (element: HTMLVideoElement) => {
    if (element !== null) {
      element.currentTime = (image.time_in_seconds ?? 0) / 1000;
    }
  };

  return (
    <Dialog>
      <DialogTrigger className={className}>
        <MonitorPlay />
      </DialogTrigger>
      <DialogContent className="m-4 max-h-[80vh] w-full max-w-screen-lg">
        <DialogHeader>
          <DialogTitle>{videoId}</DialogTitle>
        </DialogHeader>

        <video
          src={`${process.env.VIDEO_API_BASE_URL}/videos/${videoId}`}
          ref={handleVideoMounted}
          controls
        />
      </DialogContent>
    </Dialog>
  );
}
