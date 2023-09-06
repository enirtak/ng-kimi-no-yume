/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { DreamListResponse } from '../models/dream-list-response';
import { DreamItemResponse } from '../models/dream-item-response';
import { DreamDictionaryRequest } from '../models/dream-dictionary-request';
import { DreamIdRequest } from '../models/dream-id-request';
@Injectable({
  providedIn: 'root',
})
class DreamDictionaryService extends __BaseService {
  static readonly getApiDreamDictionaryGetDreamDictionaryPath = '/api/DreamDictionary/GetDreamDictionary';
  static readonly postApiDreamDictionaryCreateNewDreamPath = '/api/DreamDictionary/CreateNewDream';
  static readonly postApiDreamDictionaryUpdateDreamPath = '/api/DreamDictionary/UpdateDream';
  static readonly postApiDreamDictionaryDeleteDreamPath = '/api/DreamDictionary/DeleteDream';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getApiDreamDictionaryGetDreamDictionaryResponse(): __Observable<__StrictHttpResponse<DreamListResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/DreamDictionary/GetDreamDictionary`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DreamListResponse>;
      })
    );
  }
  /**
   * @return Success
   */
  getApiDreamDictionaryGetDreamDictionary(): __Observable<DreamListResponse> {
    return this.getApiDreamDictionaryGetDreamDictionaryResponse().pipe(
      __map(_r => _r.body as DreamListResponse)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiDreamDictionaryCreateNewDreamResponse(body?: DreamDictionaryRequest): __Observable<__StrictHttpResponse<DreamItemResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/DreamDictionary/CreateNewDream`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DreamItemResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postApiDreamDictionaryCreateNewDream(body?: DreamDictionaryRequest): __Observable<DreamItemResponse> {
    return this.postApiDreamDictionaryCreateNewDreamResponse(body).pipe(
      __map(_r => _r.body as DreamItemResponse)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiDreamDictionaryUpdateDreamResponse(body?: DreamDictionaryRequest): __Observable<__StrictHttpResponse<DreamItemResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/DreamDictionary/UpdateDream`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DreamItemResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postApiDreamDictionaryUpdateDream(body?: DreamDictionaryRequest): __Observable<DreamItemResponse> {
    return this.postApiDreamDictionaryUpdateDreamResponse(body).pipe(
      __map(_r => _r.body as DreamItemResponse)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiDreamDictionaryDeleteDreamResponse(body?: DreamIdRequest): __Observable<__StrictHttpResponse<DreamItemResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/DreamDictionary/DeleteDream`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DreamItemResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postApiDreamDictionaryDeleteDream(body?: DreamIdRequest): __Observable<DreamItemResponse> {
    return this.postApiDreamDictionaryDeleteDreamResponse(body).pipe(
      __map(_r => _r.body as DreamItemResponse)
    );
  }
}

module DreamDictionaryService {
}

export { DreamDictionaryService }
