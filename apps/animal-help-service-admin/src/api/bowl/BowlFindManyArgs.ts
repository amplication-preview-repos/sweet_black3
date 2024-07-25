import { BowlWhereInput } from "./BowlWhereInput";
import { BowlOrderByInput } from "./BowlOrderByInput";

export type BowlFindManyArgs = {
  where?: BowlWhereInput;
  orderBy?: Array<BowlOrderByInput>;
  skip?: number;
  take?: number;
};
