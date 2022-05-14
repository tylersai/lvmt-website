import { CommonType } from "./model";

export type CommonSelectorType<T = CommonType[]> = {
  loading?: boolean;
  error?: any;
  data?: T;
};

export interface RootState {
  staffTypeList: CommonSelectorType;
  roleTypeList: CommonSelectorType;
  salutationList: CommonSelectorType;
}
