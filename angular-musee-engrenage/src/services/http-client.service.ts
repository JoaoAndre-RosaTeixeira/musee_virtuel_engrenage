import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getRequest<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
  }

  // postRequest<T>(url: string, item:object ): Observable<T> {
  //   const headers = { 'content-type': 'application/json'}
  //   const body=JSON.stringify(item);
  //
  //   return this.httpClient.post<T>(TotogameAPI.url(url), body,{'headers':headers});
  //
  // }

}
