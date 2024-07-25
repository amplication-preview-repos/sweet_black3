import { Bowl } from "../bowl/Bowl";

export type Location = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  latitude: number | null;
  longitude: number | null;
  bowls?: Array<Bowl>;
};
