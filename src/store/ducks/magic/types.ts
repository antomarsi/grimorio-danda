export interface MagicCircle {
  id: number;
  name: string;
  descriptors: number[];
  description?: string;
}

export interface Descriptor {
  id: number;
  name: string;
  description?: string;
}

export interface Magic {
  id: number;
  name: string;
  circles: Array<{ id: number; tier: number; descriptor: Array<number> }>;
  executionTime: string;
  range: string;
  duration: string;
  resistanceTest: string;
  description: string;

  target?: string;
  area?: string;
  effect?: string;
  materialComponent?: string;
  xpCost?: string;
  icon?: string;
  tags?: string[];
}

export enum MagicTypes {
  FETCH_REQUEST = "@@magics/FETCH_REQUEST",
  FETCH_SUCCESS = "@@magics/FETCH_SUCCESS",
  FETCH_ERROR = "@@magics/FETCH_ERROR",
  SET_FILTER = "@@magics/SET_FILTER",
  RESET_FILTER = "@@magics/RESET_FILTER"
}

export interface Filter {
  readonly descriptors: number[];
  readonly magicCircle: number[];
  readonly tiers: number[];
  readonly isFavorited: boolean;
  readonly nameSearch: string;
}

export interface MagicState {
  readonly loading: boolean;
  readonly data: {
    readonly magics: Magic[];
    readonly descriptors: Descriptor[];
    readonly magicCircles: MagicCircle[];
  };
  readonly error: boolean;
  readonly filter: Filter;
}

export const InitialState: MagicState = {
  loading: false,
  error: false,
  data: {
    magics: [],
    descriptors: [],
    magicCircles: []
  },
  filter: {
    isFavorited: false,
    nameSearch: "",
    descriptors: [],
    magicCircle: [],
    tiers: []
  }
};
