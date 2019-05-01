export interface Circle {
  id: number;
  name: string;
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
  levels: Array<{ circleId: number; level: number }>;
  descriptorIds: Array<number>;

  executionTime: string;
  range: string;
  duration: string;
  resistenceTest: string;
  description: string;

  target?: string;
  area?: string;
  effect?: string;
  materialComponent?: string;
  xpCost?: string;
  icon?: string;
  tags: string[];
}

export enum MagicActionTypes {
  FETCH_REQUEST = "@magics/FETCH_REQUEST",
  FETCH_SUCCESS = "@magics/FETCH_SUCCESS",
  FETCH_ERROR = "@magics/FETCH_ERROR"
}

export interface MagicState {
  readonly loading: boolean;
  readonly data: Magic[];
  readonly errors?: string;
}
