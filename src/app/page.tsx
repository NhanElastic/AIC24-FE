"use client";

import SearchImage from "@/components/SearchImage";
import NavBar from "@/components/NavBar";
import {
  ImageResultContext,
  ImageResultContextType,
} from "@/contexts/ImageResultContext";
import { useMemo, useState } from "react";
import ImageResultView from "@/components/ImageResultView";
import { SearchTextResponse } from "@/types/dtos/search-text.type";

export default function Home() {
  const [imageResult, setImageResult] = useState<SearchTextResponse>({
    mode: "moment",
    clusters: [],
  });

  const imageResultMemo = useMemo<ImageResultContextType>(
    () => [imageResult, setImageResult],
    [imageResult, setImageResult],
  );

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
