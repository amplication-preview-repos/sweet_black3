import { BowlUpdateManyWithoutLocationsInput } from "./BowlUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  latitude?: number | null;
  longitude?: number | null;
  bowls?: BowlUpdateManyWithoutLocationsInput;
};
