import axios from "axios";
import { SearchTextResponse } from "@/types/dtos/search-text.type";

const api = axios.create({
  baseURL: process.env.IMAGE_API_BASE_URL,
});

export async function fetchImagesByText(
  mode: "cluster" | "moment" | "location",
  text: string,
): Promise<SearchTextResponse> {
  return api
    .post("/search/text", { mode, text })
    .then((res) => {
      console.log(res);
      return res;
    })
    .then((res) => ({ mode: res.data.mode, clusters: res.data.results }));
}
