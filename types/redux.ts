import { CommonType } from "./model";

export type CommonSelectorType<T = CommonType[]> = {
  loading?: boolean;
  error?: any;
  data?: T;
};
