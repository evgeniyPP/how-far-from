import axios, { AxiosRequestConfig } from 'axios';
import { Observable } from 'rxjs';

export default class HttpClient {
  static get<T = any>(url: string, config?: AxiosRequestConfig): Observable<T> {
    return new Observable<T>(observer => {
      axios
        .get<T>(url, config)
        .then(({ data }) => {
          observer.next(data);
          observer.complete();
        })
        .catch(e => observer.error(e));
    });
  }

  static post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Observable<T> {
    return new Observable<T>(observer => {
      axios
        .post<T>(url, data, config)
        .then(({ data }) => {
          observer.next(data);
          observer.complete();
        })
        .catch(e => observer.error(e));
    });
  }

  static put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Observable<T> {
    return new Observable<T>(observer => {
      axios
        .put<T>(url, data, config)
        .then(({ data }) => {
          observer.next(data);
          observer.complete();
        })
        .catch(e => observer.error(e));
    });
  }

  static patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Observable<T> {
    return new Observable<T>(observer => {
      axios
        .patch<T>(url, data, config)
        .then(({ data }) => {
          observer.next(data);
          observer.complete();
        })
        .catch(e => observer.error(e));
    });
  }

  static delete<T = any>(url: string, config?: AxiosRequestConfig): Observable<T> {
    return new Observable<T>(observer => {
      axios
        .delete<T>(url, config)
        .then(({ data }) => {
          observer.next(data);
          observer.complete();
        })
        .catch(e => observer.error(e));
    });
  }
}
