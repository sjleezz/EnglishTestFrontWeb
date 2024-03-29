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

export interface UniversalFetchDataResolveType<T> {
  message: ReturnMessageType;
  data: T;
}

export interface UniversalFetchDataArgsType<T> {
  method: MethodType | string;
  url: string;
  data: T;
  headers: RawAxiosRequestHeaders | AxiosHeaders;
}

export interface UniversalFetchDataType<T, R> {
  ([args]: UniversalFetchDataArgsType<T>): Promise<R>;
}

export interface TErrorType<T> {
  message: T;
}

export type PaginationPosition = "top" | "bottom" | "both";

export type PaginationAlign = "start" | "center" | "end";

export interface ContentsType1 {
  contentsId : number,
  id : number,
  src : string,
  type : string
}
export interface ContentsType2 {
  contentsId : number,
  id : number,
  src : string,
  type : string
}
export interface ContentsType3 {
  contentsId : number,
  id : number,
  src : string,
  type : string
}
export interface ContentsType4 {
  contentsId : number,
  id : number,
  src : string,
  type : string
}
export interface ContentsType5 {
  contentsId : number,
  id : number,
  src : string,
  type : string
}
export interface ContentsType6 {
  contentsId : number,
  id : number,
  src : string,
  type : string
}