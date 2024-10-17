export interface ImageEntity {
  id: string;
  path: string;
  name?: string;
  is_main?: boolean;
  is_same_location?: true;
  time_in_seconds?: number;
  fps?: number;
}
