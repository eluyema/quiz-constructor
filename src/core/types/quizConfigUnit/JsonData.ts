export type InputJsonObject = {
  [key: string]: JsonData;
};

export type InputJsonArray = JsonData[];

export type JsonData = string | number | boolean | InputJsonObject | InputJsonArray | null;
