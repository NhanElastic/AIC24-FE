import { ImageEntity } from "@/types/entities/image.type";

export interface ClusterEntity {
  cluster_name: string;
  url?: string;
  image_list: ImageEntity[];
}
