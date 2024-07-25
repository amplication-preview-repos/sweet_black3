import { InputJsonValue } from "../../types";
import { StatusUpdateUpdateManyWithoutUsersInput } from "./StatusUpdateUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  statusUpdates?: StatusUpdateUpdateManyWithoutUsersInput;
};
