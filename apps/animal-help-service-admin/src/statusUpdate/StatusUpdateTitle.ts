import { StatusUpdate as TStatusUpdate } from "../api/statusUpdate/StatusUpdate";

export const STATUSUPDATE_TITLE_FIELD = "id";

export const StatusUpdateTitle = (record: TStatusUpdate): string => {
  return record.id?.toString() || String(record.id);
};
