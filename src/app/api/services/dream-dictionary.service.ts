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
import { BaseResponse } from '../models/base-response';
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
   * Returns a list of dictionary of dreams.
   * @return Returns the list.
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
   * Returns a list of dictionary of dreams.
   * @return Returns the list.
   */
  getApiDreamDictionaryGetDreamDictionary(): __Observable<DreamListResponse> {
    return this.getApiDreamDictionaryGetDreamDictionaryResponse().pipe(
      __map(_r => _r.body as DreamListResponse)
    );
  }

  /**
   * Creates a new dream dictionary.
   * @param body Create New Dream Request
   * @return Returns the new dream.
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
   * Creates a new dream dictionary.
   * @param body Create New Dream Request
   * @return Returns the new dream.
   */
  postApiDreamDictionaryCreateNewDream(body?: DreamDictionaryRequest): __Observable<DreamItemResponse> {
    return this.postApiDreamDictionaryCreateNewDreamResponse(body).pipe(
      __map(_r => _r.body as DreamItemResponse)
    );
  }

  /**
   * Updates a dream dictionary.
   * @param body Update Dream Request
   * @return Returns the updated dream.
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
   * Updates a dream dictionary.
   * @param body Update Dream Request
   * @return Returns the updated dream.
   */
  postApiDreamDictionaryUpdateDream(body?: DreamDictionaryRequest): __Observable<DreamItemResponse> {
    return this.postApiDreamDictionaryUpdateDreamResponse(body).pipe(
      __map(_r => _r.body as DreamItemResponse)
    );
  }

  /**
   * Performs soft delete on Dream Dictionary entry.
   * @param body Delete Dream Request
   * @return Returns IsSuccess
   */
  postApiDreamDictionaryDeleteDreamResponse(body?: DreamIdRequest): __Observable<__StrictHttpResponse<BaseResponse>> {
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
        return _r as __StrictHttpResponse<BaseResponse>;
      })
    );
  }
  /**
   * Performs soft delete on Dream Dictionary entry.
   * @param body Delete Dream Request
   * @return Returns IsSuccess
   */
  postApiDreamDictionaryDeleteDream(body?: DreamIdRequest): __Observable<BaseResponse> {
    return this.postApiDreamDictionaryDeleteDreamResponse(body).pipe(
      __map(_r => _r.body as BaseResponse)
    );
  }
}

module DreamDictionaryService {
}

export { DreamDictionaryService }
