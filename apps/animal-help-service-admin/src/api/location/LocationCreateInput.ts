import { BowlCreateNestedManyWithoutLocationsInput } from "./BowlCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  latitude?: number | null;
  longitude?: number | null;
  bowls?: BowlCreateNestedManyWithoutLocationsInput;
};
