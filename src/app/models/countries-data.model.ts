export interface CountriesData {
  [countryCode: string]: CountryData;
}

export interface CountryData {
  value: number;
  extra?: CountryExtraData;
}

export interface CountryExtraData {
  [key: string]: number | string;
}
