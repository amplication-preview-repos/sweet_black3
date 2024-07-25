import { Location } from "../location/Location";
import { StatusUpdate } from "../statusUpdate/StatusUpdate";

export type Bowl = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  capacity: number | null;
  status?: "Option1" | null;
  location?: Location | null;
  statusUpdates?: Array<StatusUpdate>;
};
