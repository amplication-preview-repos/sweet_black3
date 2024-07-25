import { SortOrder } from "../../util/SortOrder";

export type LocationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
};
