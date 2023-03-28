import { RawAxiosRequestHeaders } from "axios";

//** Repository of Defined Types for All */

export const MenuListArray = [
  "Main", "SpeechPro"];

export enum MenuList {
  "Main",
  "SpeechPro",
}

export const ModeListArray = [
  "Mode1", 
  "Mode2"];

export type ModeType = 
| "Mode1"
| "Mode2"
| string

export enum ModeList {
  "Mode1", 
  "Mode2"
}

export const SubjectListArray = ["Education", "Environment", "Globalization", "Technology", "Health", "Social"];

export type SubjectType = 
| "Education"
| "Environment"
| "Globalization"
| "Technology"
| "Health"
| "Social"
| string

export enum SubjectList {
  "Education",
  "Environment",
  "Globalization",
  "Technology",
  "Health",
  "Social"
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
