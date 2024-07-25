import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BowlWhereUniqueInput } from "../bowl/BowlWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StatusUpdateWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  timestamp?: DateTimeNullableFilter;
  bowl?: BowlWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
