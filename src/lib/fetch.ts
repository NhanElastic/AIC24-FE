import axios, { AxiosResponse } from "axios";
import { ClusterEntity } from "@/types/entities/cluster.type";

const api = axios.create({
  baseURL: process.env.IMAGE_API_BASE_URL,
});

export async function fetchImagesByText(
  query: string,
): Promise<ClusterEntity[]> {
  return api
    .post("/search/text", { mode: "moment", text: query })
    .then((res) => res.data.results);
}
