import { Bowl } from "../bowl/Bowl";
import { User } from "../user/User";

export type StatusUpdate = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  timestamp: Date | null;
  bowl?: Bowl | null;
  user?: User | null;
};
