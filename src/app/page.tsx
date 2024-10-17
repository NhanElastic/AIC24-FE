"use client";

import SearchImage from "@/components/SearchImage";
import NavBar from "@/components/NavBar";
import { ImageResultContext } from "@/contexts/ImageResultContext";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { ClusterEntity } from "@/types/entities/cluster.type";
import ImageResultView from "@/components/ImageResultView";

export default function Home() {
  const [imageResult, setImageResult] = useState<ClusterEntity[]>([]);

  const imageResultMemo = useMemo<
    [ClusterEntity[], Dispatch<SetStateAction<ClusterEntity[]>>]
  >(() => [imageResult, setImageResult], [imageResult, setImageResult]);

  return (
    <>
      <NavBar size="lg" />
      <div className="flex justify-center">
        <div className="w-full max-w-screen-lg p-4">
          <ImageResultContext.Provider value={imageResultMemo}>
            <SearchImage />
            <ImageResultView />
          </ImageResultContext.Provider>
        </div>
      </div>
    </>
  );
}
