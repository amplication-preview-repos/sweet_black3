import { InputJsonValue } from "../../types";
import { StatusUpdateCreateNestedManyWithoutUsersInput } from "./StatusUpdateCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  statusUpdates?: StatusUpdateCreateNestedManyWithoutUsersInput;
};
