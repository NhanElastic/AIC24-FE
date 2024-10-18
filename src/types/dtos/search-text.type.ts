import { ClusterEntity } from "@/types/entities/cluster.type";

export interface SearchTextDto {
  mode: "moment" | "cluster" | "location";
  text: string;
  type: string;
}

export interface SearchTextResponse {
  mode: "moment" | "cluster" | "location";
  clusters: ClusterEntity[];
}
