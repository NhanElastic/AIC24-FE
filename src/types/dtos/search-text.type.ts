import { ClusterEntity } from "@/types/entities/cluster.type";

export interface SearchTextDto {
  mode: "moment" | "location";
  text: string;
  type: string;
}

export interface SearchTextResponse {
  mode: "moment" | "location";
  clusters: ClusterEntity[];
}
