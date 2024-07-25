import { BowlWhereUniqueInput } from "../bowl/BowlWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StatusUpdateUpdateInput = {
  status?: "Option1" | null;
  timestamp?: Date | null;
  bowl?: BowlWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
