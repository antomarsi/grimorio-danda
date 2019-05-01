export interface MagicCircle {
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
  circles: Array<{ id: number; tier: number, descriptor: Array<number> }>;
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

export enum MagicActionTypes {
  FETCH_REQUEST = "@@magics/FETCH_REQUEST",
  FETCH_SUCCESS = "@@magics/FETCH_SUCCESS",
  FETCH_ERROR = "@@magics/FETCH_ERROR"
}

export interface MagicState {
  readonly loading: boolean;
  readonly magics: Magic[];
  readonly descriptors: Descriptor[];
  readonly magicCircle: MagicCircle[];
  readonly errors?: string;
}
