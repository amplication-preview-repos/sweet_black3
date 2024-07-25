import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { StatusUpdateCreateNestedManyWithoutBowlsInput } from "./StatusUpdateCreateNestedManyWithoutBowlsInput";

export type BowlCreateInput = {
  capacity?: number | null;
  status?: "Option1" | null;
  location?: LocationWhereUniqueInput | null;
  statusUpdates?: StatusUpdateCreateNestedManyWithoutBowlsInput;
};
