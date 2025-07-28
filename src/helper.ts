import { InfoType } from "./core/enums";

export const isRandom = (value: number | null) => !Boolean(value)

export const isNumber = (value: string) => /^\d+$/.test(value)

export const getDisplayTitle = (value: string, type: InfoType): string => {
  if (isNumber(value)) {
    const num = +value;
    const prefix = isRandom(num) ? InfoType.Random : num;
    return `${prefix}/${type}`;
  }
  return `${InfoType.Random}/${type}`;
};