export interface CovidRequestModel {
  cases: Cases;
  continent: string;
  country: string;
  day: string;
  deaths: Deaths;
  population: number;
  tests: Tests;
  time: string;
}

interface Cases {
  '1M_pop': string;
  active: number;
  critical: number;
  new: string;
  recovered: number;
  total: number;
}

interface Deaths {
  '1M_pop': string;
  new: number | string | null;
  total: number;
}

interface Tests {
  '1M_pop': string;
  total: number;
}

export interface Chart1 {
  country: string;
  totalCases: number;
  deaths: number;
  recovered: number;
  population: number;
}
