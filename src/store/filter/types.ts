
export enum FilterActionTypes {
  GET_FILTER = "@filter/GET_FILTER",
  UPDATE_FILTER = "@filter/UPDATE_FILTER",
  RESET_FILTER = "@filter/RESET_FILTER",
}

export interface FilterState {
  readonly descriptors: number[];
  readonly magicCircle: number[];
  readonly tiers: number[];
  readonly isFavorited: boolean;
  readonly nameSearch: string;
}
