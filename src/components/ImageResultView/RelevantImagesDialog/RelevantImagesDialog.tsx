import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ImageEntity } from "@/types/entities/image.type";
import { useCallback, useEffect, useState } from "react";
import { fetchRelevantImages } from "@/lib/fetch";
import ImageCard from "@/components/ImageResultView/ImageCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PaginationBar from "@/components/ImageResultView/PaginationBar";

export interface RelevantImagesDialogProps {
  image: ImageEntity;
}

const momentsPerPage = 30;

export default function RelevantImagesDialog({
  image,
}: RelevantImagesDialogProps) {
  const [relevantImages, setRelevantImages] = useState<ImageEntity[]>([]);
  const [open, setOpen] = useState(false);
  const [searchMode, setSearchMode] = useState<string>("timeline");
  const [pageNumber, setPageNumber] = useState(1);
  const totalPage = Math.ceil(relevantImages.length / momentsPerPage);

  const startImagesIndex = (pageNumber - 1) * momentsPerPage;
  const endImagesIndex = Math.min(
    pageNumber * momentsPerPage,
    relevantImages.length,
  );

  const fetchData = useCallback(async () => {
    if (!open) return;

    const result = await fetchRelevantImages(image, searchMode);
    setPageNumber(1);
    setRelevantImages(result);
  }, [open, image, searchMode]);

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, [fetchData]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>Find similarity</DialogTrigger>
      <DialogContent className="m-4 max-h-[80vh] w-full max-w-screen-lg overflow-auto">
        <DialogHeader>
          <DialogTitle>{image.id}</DialogTitle>
          <Select defaultValue="timeline" onValueChange={setSearchMode}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="timeline">
                Nearby moments with the selected image
              </SelectItem>
              <SelectItem value="location">
                Relevant images with the same location
              </SelectItem>
              <SelectItem value="similar">
                Visually similar images of the selected image
              </SelectItem>
            </SelectContent>
          </Select>
        </DialogHeader>

        <div className="grid grid-cols-3 gap-2 lg:grid-cols-5">
          {relevantImages
            .slice(startImagesIndex, endImagesIndex)
            .map((rImage) => (
              <ImageCard key={rImage.id} image={rImage} />
            ))}

          <PaginationBar
            currentPage={pageNumber}
            totalPage={totalPage}
            onPageChange={setPageNumber}
            className="col-span-5 justify-self-center xl:col-span-3"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
