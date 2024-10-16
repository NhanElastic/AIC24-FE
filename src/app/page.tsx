"use client";

import SearchImage from "@/components/SearchImage";
import NavBar from "@/components/NavBar";
import { ImageResultContext } from "@/contexts/ImageResultContext";
import { ImageEntity } from "@/types/entities/image.type";
import { Dispatch, SetStateAction, useMemo, useState } from "react";

export default function Home() {
  const [imageResult, setImageResult] = useState<ImageEntity[]>([]);

  const imageResultMemo = useMemo<
    [ImageEntity[], Dispatch<SetStateAction<ImageEntity[]>>]
  >(() => [imageResult, setImageResult], [imageResult, setImageResult]);

  return (
    <>
      <NavBar size="lg" />
      <div className="flex justify-center">
        <div className="w-full max-w-screen-lg p-4">
          <ImageResultContext.Provider value={imageResultMemo}>
            <SearchImage />

            <h2 className="mt-4 text-2xl font-bold">Video Thumbnail</h2>
          </ImageResultContext.Provider>
        </div>
      </div>
    </>
  );
}
