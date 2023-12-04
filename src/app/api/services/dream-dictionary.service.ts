/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { DictionaryResponse } from '../models/dictionary-response';
import { DictionarytemResponse } from '../models/dictionarytem-response';
import { DreamDictionaryRequest } from '../models/dream-dictionary-request';
import { BaseResponse } from '../models/base-response';
@Injectable({
  providedIn: 'root',
})
class DreamDictionaryService extends __BaseService {
  static readonly getApiDreamDictionaryGetDreamDictionaryPath = '/api/DreamDictionary/GetDreamDictionary';
  static readonly postApiDreamDictionaryCreateNewDreamPath = '/api/DreamDictionary/CreateNewDream';
  static readonly postApiDreamDictionaryUpdateDreamPath = '/api/DreamDictionary/UpdateDream';
  static readonly putApiDreamDictionaryDeleteDreamPath = '/api/DreamDictionary/DeleteDream';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getApiDreamDictionaryGetDreamDictionaryResponse(): __Observable<__StrictHttpResponse<DictionaryResponse>> {
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
        return _r as __StrictHttpResponse<DictionaryResponse>;
      })
    );
  }
  /**
   * @return Success
   */
  getApiDreamDictionaryGetDreamDictionary(): __Observable<DictionaryResponse> {
    return this.getApiDreamDictionaryGetDreamDictionaryResponse().pipe(
      __map(_r => _r.body as DictionaryResponse)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiDreamDictionaryCreateNewDreamResponse(body?: DreamDictionaryRequest): __Observable<__StrictHttpResponse<DictionarytemResponse>> {
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
        return _r as __StrictHttpResponse<DictionarytemResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postApiDreamDictionaryCreateNewDream(body?: DreamDictionaryRequest): __Observable<DictionarytemResponse> {
    return this.postApiDreamDictionaryCreateNewDreamResponse(body).pipe(
      __map(_r => _r.body as DictionarytemResponse)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiDreamDictionaryUpdateDreamResponse(body?: DreamDictionaryRequest): __Observable<__StrictHttpResponse<DictionarytemResponse>> {
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
        return _r as __StrictHttpResponse<DictionarytemResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postApiDreamDictionaryUpdateDream(body?: DreamDictionaryRequest): __Observable<DictionarytemResponse> {
    return this.postApiDreamDictionaryUpdateDreamResponse(body).pipe(
      __map(_r => _r.body as DictionarytemResponse)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  putApiDreamDictionaryDeleteDreamResponse(body?: number): __Observable<__StrictHttpResponse<BaseResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
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
        return _r as __StrictHttpResponse<BaseResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  putApiDreamDictionaryDeleteDream(body?: number): __Observable<BaseResponse> {
    return this.putApiDreamDictionaryDeleteDreamResponse(body).pipe(
      __map(_r => _r.body as BaseResponse)
    );
  }
}

module DreamDictionaryService {
}

export { DreamDictionaryService }
