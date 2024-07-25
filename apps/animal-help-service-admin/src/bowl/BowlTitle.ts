import { Bowl as TBowl } from "../api/bowl/Bowl";

export const BOWL_TITLE_FIELD = "id";

export const BowlTitle = (record: TBowl): string => {
  return record.id?.toString() || String(record.id);
};
