import { RawAxiosRequestHeaders } from "axios";

//** Repository of Defined Types for All */

export const MenuListArray = ["Main", "SpeechPro", "VocaPro", "GrammarPro"];

export enum MenuList {
  "Main",
  "SpeechPro",
  "VocaPro",
  "GrammarPro",
}

export type MethodType = "POST" | "GET";

export type ReturnMessageType = "success" | "fail";

export interface UniversalFetchDataResolveType {
  message: ReturnMessageType;
  data: any;
}

export interface UniversalFetchDataArgsType {
  method: MethodType | string;
  url: string;
  data: any;
  headers: RawAxiosRequestHeaders | AxiosHeaders;
}

export interface UniversalFetchDataType<T> {
  ([args]: UniversalFetchDataArgsType): Promise<T>;
}

export interface TErrorType<T> {
  message: T;
}

export type PaginationPosition = "top" | "bottom" | "both";

export type PaginationAlign = "start" | "center" | "end";
