import { SortOrder } from "../../util/SortOrder";

export type StatusUpdateOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  timestamp?: SortOrder;
  bowlId?: SortOrder;
  userId?: SortOrder;
};
