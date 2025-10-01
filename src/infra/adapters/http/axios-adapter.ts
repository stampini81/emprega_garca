import { API_URL, axiosInstance } from "@/constants/api";
import { type AxiosError, type AxiosResponse } from "axios";

type requestPayload = {
  endpoint: string,
  method: string,
  headers?: Record<string, string>,
  body?: string
}

type uploadFilePayload = {
  endpoint: string,
  fields: Record<string, string | number>,
  file?: File,
  headers?: Record<string, string>
}

export interface HttpClient {
  request: <T>(data: requestPayload) => Promise<{ statusCode: number, data?: T }>
  uploadFile: <T>(data: uploadFilePayload) => Promise<{ statusCode: number, data?: T }>
}

export class AxiosHttpClientAdapter implements HttpClient {
  public async request<T>({ endpoint, method, headers, body }: requestPayload): Promise<{ statusCode: number; data?: T | undefined; }> {
    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axiosInstance.request({
        url: API_URL + endpoint,
        method,
        headers,
        data: body
      })
    }
    catch (error) {
      let _error = error as AxiosError<{ message: string }>
      throw new Error(_error?.response?.data.message);
    }

    return {
      statusCode: axiosResponse.status,
      data: axiosResponse?.data
    }
  };

  public async uploadFile<T>({ endpoint, fields, file, headers }: uploadFilePayload): Promise<{ statusCode: number; data?: T | undefined; }> {
    let axiosResponse: AxiosResponse;

    const form = new FormData();

    Object.entries(fields).forEach(([key, value]) => {
      form.append(key, String(value));
    });

    if (file)
      form.append('image', file);

    try {
      axiosResponse = await axiosInstance.post(API_URL + endpoint, form, {
        headers: {
          ...headers,
          'Content-Type': 'multipart/form-data'
        }
      });
    } catch (error) {
      console
      let _error = error as AxiosError<{ message: string }>;
      throw new Error(_error?.response?.data.message);
    }

    return {
      statusCode: axiosResponse.status,
      data: axiosResponse?.data
    };
  }
}