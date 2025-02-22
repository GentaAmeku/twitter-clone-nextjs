import { v4 as uuidv4 } from "uuid";

export type Model<T> = {
  get: (cb: (data: T) => boolean) => T | undefined;
  insert: (value: T) => void;
  getAll: () => T[];
};

export type Database<T> = () => Model<T>;

export const createDatabase = <T extends { id: string }>(
  initialData: T[],
): Database<T> => {
  const data = initialData;
  return () => ({
    get: (cb) => data.find(cb),
    getAll: () => structuredClone(data),
    insert: (newData: T) => data.push({ ...newData, id: uuidv4() }),
    update: (id: string, newData: Partial<T>) => {
      const i = data.findIndex((d) => d.id === id);
      if (i === -1) return null;
      // Mutate
      data[i] = { ...data[i], ...newData };
      return data[i];
    },
    remove: (id: string) => {
      const index = data.findIndex((d) => d.id === id);
      if (index === -1) return null;
      // Mutate
      const removed = data.splice(index, 1)[0];
      return removed;
    },
  });
};
