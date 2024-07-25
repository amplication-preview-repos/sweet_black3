import { StatusUpdateWhereInput } from "./StatusUpdateWhereInput";
import { StatusUpdateOrderByInput } from "./StatusUpdateOrderByInput";

export type StatusUpdateFindManyArgs = {
  where?: StatusUpdateWhereInput;
  orderBy?: Array<StatusUpdateOrderByInput>;
  skip?: number;
  take?: number;
};
