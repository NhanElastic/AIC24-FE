import { createContext, Dispatch, SetStateAction } from "react";
import { SearchTextResponse } from "@/types/dtos/search-text.type";

export type ImageResultContextType = [
  SearchTextResponse,
  Dispatch<SetStateAction<SearchTextResponse>>,
];

export const ImageResultContext = createContext<ImageResultContextType>([
  {
    mode: "moment",
    clusters: [
      {
        cluster_name: "L13_V009/008103",
        url: "https://youtube.com/watch?v=YxNWmf_KG-4",
        image_list: [
          {
            id: "L13_V009/008103",
            path: "L13/",
            time_in_seconds: 324120.0,
          },
        ],
      },
      {
        cluster_name: "L01_V022/007780",
        url: "https://youtube.com/watch?v=C53PHt9TRvs",
        image_list: [
          {
            id: "L01_V022/007780",
            path: "L01/",
            time_in_seconds: 311200.0,
          },
        ],
      },
    ],
  },
  () => {},
]);
