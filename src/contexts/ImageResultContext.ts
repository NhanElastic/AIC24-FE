import { createContext, Dispatch, SetStateAction } from "react";
import { ClusterEntity } from "@/types/entities/cluster.type";

export const ImageResultContext = createContext<
  [ClusterEntity[], Dispatch<SetStateAction<ClusterEntity[]>>]
>([
  [
    {
      cluster_name: "L01_V001/2567",
      url: "https://www.google.com",
      image_list: [
        {
          id: "abc",
          name: "image.jpg",
          fps: 30,
          is_main: true,
          path: "https://picsum.photos/200",
          is_same_location: true,
          time_in_seconds: 10,
        },
        {
          id: "dfs",
          name: "image.jpg",
          fps: 30,
          is_main: true,
          path: "https://picsum.photos/200",
          is_same_location: true,
          time_in_seconds: 10,
        },
      ],
    },
    {
      cluster_name: "L01_V001/2873",
      image_list: [
        {
          id: "dfs",
          name: "image.jpg",
          fps: 30,
          is_main: true,
          path: "https://picsum.photos/200",
          is_same_location: true,
          time_in_seconds: 10,
        },
        {
          id: "af",
          name: "image.jpg",
          fps: 30,
          is_main: true,
          path: "https://picsum.photos/200",
          is_same_location: true,
          time_in_seconds: 10,
        },
      ],
    },
    {
      cluster_name: "L01_V001/2567",
      image_list: [
        {
          id: "df",
          name: "image.jpg",
          fps: 30,
          is_main: true,
          path: "https://picsum.photos/200",
          is_same_location: true,
          time_in_seconds: 10,
        },
      ],
    },
  ],
  () => {},
]);
