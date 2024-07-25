import { SortOrder } from "../../util/SortOrder";

export type BowlOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  capacity?: SortOrder;
  status?: SortOrder;
  locationId?: SortOrder;
};
