import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { StatusUpdateUpdateManyWithoutBowlsInput } from "./StatusUpdateUpdateManyWithoutBowlsInput";

export type BowlUpdateInput = {
  capacity?: number | null;
  status?: "Option1" | null;
  location?: LocationWhereUniqueInput | null;
  statusUpdates?: StatusUpdateUpdateManyWithoutBowlsInput;
};
