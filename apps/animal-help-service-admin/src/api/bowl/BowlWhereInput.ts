import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { StatusUpdateListRelationFilter } from "../statusUpdate/StatusUpdateListRelationFilter";

export type BowlWhereInput = {
  id?: StringFilter;
  capacity?: IntNullableFilter;
  status?: "Option1";
  location?: LocationWhereUniqueInput;
  statusUpdates?: StatusUpdateListRelationFilter;
};
