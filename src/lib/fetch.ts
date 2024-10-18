import axios from "axios";
import { SearchTextResponse } from "@/types/dtos/search-text.type";
import { ImageEntity } from "@/types/entities/image.type";

const api = axios.create({
  baseURL: process.env.IMAGE_API_BASE_URL,
});

export async function fetchImagesByText(
  mode: "moment" | "location",
  text: string,
): Promise<SearchTextResponse> {
  const body = { mode, text };

  return api
    .post("/search/text", body)
    .then((res) => {
      console.log(res);
      return res;
    })
    .then((res) => ({ mode: res.data.mode, clusters: res.data.results }));
}

export async function fetchRelevantImages(image: ImageEntity, mode: string) {
  return api
    .get("/search/related", {
      params: { image_id: image.id, mode },
    })
    .then((res) => res.data.results[0].image_list);
}
