import axios, 
{ AxiosResponse, AxiosHeaders, RawAxiosRequestHeaders } from 'axios';
import { MethodType, 
    UniversalFetchDataResolveType,
 } from '../index.d';

export const SPEECH_PRO_API_URL = process.env.REACT_APP_SPEECH_PRO_API_URL;
export const VOCA_PRO_API_URL = process.env.REACT_APP_VOCA_PRO_API_URL;
export const GRAMMAR_PRO_API_URL = process.env.REACT_APP_GRAMMAR_PRO_API_URL;

console.log('SPEECH_PRO_API_URL :', SPEECH_PRO_API_URL)
console.log('VOCA_PRO_API_URL :', VOCA_PRO_API_URL)
console.log('GRAMMAR_PRO_API_URL :', GRAMMAR_PRO_API_URL)

export const AXIOS_CONFIG = (token : string) : AxiosHeaders | RawAxiosRequestHeaders => {
    return {
        Authorization: "Bearer " + token,
    };
  };
  
export const universalFetchData = ({
    method, url, data, headers
} : {
    method : MethodType | string,
    url : string,
    data : any,
    headers :  AxiosHeaders | RawAxiosRequestHeaders 
}
) => {
    return new Promise<UniversalFetchDataResolveType>((resolve, reject) => {
        axios<any, AxiosResponse<any, any>, any>({
            method : method,
            url : url,
            data : data,
            headers : headers
        }).then((result) => {
            console.log('result :', result)
            resolve({message : 'success', data : result.data})
        }).catch((e) => {
            resolve({message : 'fail', data : e})
        })
    })
}