import axios, { AxiosError, isAxiosError } from "axios";

export interface HttpError extends Record<string, any> {
  message: string;
  statusCode: number;
}
const axiosInstance = axios.create({
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error): Promise<HttpError> => {
    if (isAxiosError(error)) {
      return Promise.reject({
        ...error,
        message: error.message,
        statusCode: error.code,
      });
    }
    const customError: HttpError = {
      ...error,
      message: error.response?.data?.message,
      statusCode: error.response?.status,
    };

    return Promise.reject(customError);
  }
);

export { axiosInstance };
