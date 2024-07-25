import { JsonValue } from "type-fest";
import { StatusUpdate } from "../statusUpdate/StatusUpdate";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  statusUpdates?: Array<StatusUpdate>;
};
