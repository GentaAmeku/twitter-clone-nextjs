export type Model<T> = {
  get: (cb: (data: T) => boolean) => T | undefined;
  insert: (value: T) => void;
  getAll: () => T[];
};

export type Database<T> = () => Model<T>;

export const createDatabase = <T>(initialData: T[]): Database<T> => {
  const data = initialData;
  return () => ({
    get: (cb) => data.find(cb),
    getAll: () => structuredClone(data),
    insert: (value: T) => data.push(value),
  });
};
