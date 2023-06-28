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
import { CategoryResponse } from '../models/category-response';
import { CategoryRequest } from '../models/category-request';
import { CategoryItemResponse } from '../models/category-item-response';
@Injectable({
  providedIn: 'root',
})
class DreamService extends __BaseService {
  static readonly getApiDreamGetDreamDictionaryPath = '/api/Dream/GetDreamDictionary';
  static readonly postApiDreamCreateNewDreamPath = '/api/Dream/CreateNewDream';
  static readonly putApiDreamUpdateDreamPath = '/api/Dream/UpdateDream';
  static readonly deleteApiDreamDeleteDreamPath = '/api/Dream/DeleteDream';
  static readonly getApiDreamGetCategoriesPath = '/api/Dream/GetCategories';
  static readonly postApiDreamCreateNewCategoryPath = '/api/Dream/CreateNewCategory';
  static readonly postApiDreamUpdateCategoryPath = '/api/Dream/UpdateCategory';
  static readonly deleteApiDreamDeleteCategoryPath = '/api/Dream/DeleteCategory';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getApiDreamGetDreamDictionaryResponse(): __Observable<__StrictHttpResponse<DreamListResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Dream/GetDreamDictionary`,
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
  getApiDreamGetDreamDictionary(): __Observable<DreamListResponse> {
    return this.getApiDreamGetDreamDictionaryResponse().pipe(
      __map(_r => _r.body as DreamListResponse)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiDreamCreateNewDreamResponse(body?: DreamDictionaryRequest): __Observable<__StrictHttpResponse<DreamItemResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Dream/CreateNewDream`,
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
  postApiDreamCreateNewDream(body?: DreamDictionaryRequest): __Observable<DreamItemResponse> {
    return this.postApiDreamCreateNewDreamResponse(body).pipe(
      __map(_r => _r.body as DreamItemResponse)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  putApiDreamUpdateDreamResponse(body?: DreamDictionaryRequest): __Observable<__StrictHttpResponse<DreamItemResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Dream/UpdateDream`,
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
  putApiDreamUpdateDream(body?: DreamDictionaryRequest): __Observable<DreamItemResponse> {
    return this.putApiDreamUpdateDreamResponse(body).pipe(
      __map(_r => _r.body as DreamItemResponse)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  deleteApiDreamDeleteDreamResponse(body?: DreamDictionaryRequest): __Observable<__StrictHttpResponse<DreamItemResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Dream/DeleteDream`,
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
  deleteApiDreamDeleteDream(body?: DreamDictionaryRequest): __Observable<DreamItemResponse> {
    return this.deleteApiDreamDeleteDreamResponse(body).pipe(
      __map(_r => _r.body as DreamItemResponse)
    );
  }

  /**
   * @return Success
   */
  getApiDreamGetCategoriesResponse(): __Observable<__StrictHttpResponse<CategoryResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Dream/GetCategories`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryResponse>;
      })
    );
  }
  /**
   * @return Success
   */
  getApiDreamGetCategories(): __Observable<CategoryResponse> {
    return this.getApiDreamGetCategoriesResponse().pipe(
      __map(_r => _r.body as CategoryResponse)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiDreamCreateNewCategoryResponse(body?: CategoryRequest): __Observable<__StrictHttpResponse<CategoryResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Dream/CreateNewCategory`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postApiDreamCreateNewCategory(body?: CategoryRequest): __Observable<CategoryResponse> {
    return this.postApiDreamCreateNewCategoryResponse(body).pipe(
      __map(_r => _r.body as CategoryResponse)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiDreamUpdateCategoryResponse(body?: CategoryRequest): __Observable<__StrictHttpResponse<CategoryResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Dream/UpdateCategory`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postApiDreamUpdateCategory(body?: CategoryRequest): __Observable<CategoryResponse> {
    return this.postApiDreamUpdateCategoryResponse(body).pipe(
      __map(_r => _r.body as CategoryResponse)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  deleteApiDreamDeleteCategoryResponse(body?: CategoryRequest): __Observable<__StrictHttpResponse<CategoryItemResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Dream/DeleteCategory`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryItemResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  deleteApiDreamDeleteCategory(body?: CategoryRequest): __Observable<CategoryItemResponse> {
    return this.deleteApiDreamDeleteCategoryResponse(body).pipe(
      __map(_r => _r.body as CategoryItemResponse)
    );
  }
}

module DreamService {
}

export { DreamService }
