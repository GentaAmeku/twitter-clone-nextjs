import { default as dayjsOriginal } from "dayjs";
import en from "dayjs/locale/en";
import relativeTime from "dayjs/plugin/relativeTime";

const globalForDayjs = global as unknown as {
  dayjsInstance?: typeof dayjsOriginal;
};

if (!globalForDayjs.dayjsInstance) {
  console.info("Creating dayjs instance...");
  dayjsOriginal.extend(relativeTime);
  dayjsOriginal.locale(en);
  globalForDayjs.dayjsInstance = dayjsOriginal;
}

export const dayjs = globalForDayjs.dayjsInstance;
