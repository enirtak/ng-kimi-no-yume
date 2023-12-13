/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CategoryResponse } from '../models/category-response';
import { CategoryItemResponse } from '../models/category-item-response';
import { DreamCategoryRequest } from '../models/dream-category-request';
import { BaseResponse } from '../models/base-response';
@Injectable({
  providedIn: 'root',
})
class DreamCategoryService extends __BaseService {
  static readonly getApiDreamCategoryGetCategoriesPath = '/api/DreamCategory/GetCategories';
  static readonly postApiDreamCategoryCreateNewCategoryPath = '/api/DreamCategory/CreateNewCategory';
  static readonly postApiDreamCategoryUpdateCategoryPath = '/api/DreamCategory/UpdateCategory';
  static readonly putApiDreamCategoryDeleteCategoryPath = '/api/DreamCategory/DeleteCategory';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getApiDreamCategoryGetCategoriesResponse(): __Observable<__StrictHttpResponse<CategoryResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/DreamCategory/GetCategories`,
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
  getApiDreamCategoryGetCategories(): __Observable<CategoryResponse> {
    return this.getApiDreamCategoryGetCategoriesResponse().pipe(
      __map(_r => _r.body as CategoryResponse)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiDreamCategoryCreateNewCategoryResponse(body?: DreamCategoryRequest): __Observable<__StrictHttpResponse<CategoryItemResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/DreamCategory/CreateNewCategory`,
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
  postApiDreamCategoryCreateNewCategory(body?: DreamCategoryRequest): __Observable<CategoryItemResponse> {
    return this.postApiDreamCategoryCreateNewCategoryResponse(body).pipe(
      __map(_r => _r.body as CategoryItemResponse)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiDreamCategoryUpdateCategoryResponse(body?: DreamCategoryRequest): __Observable<__StrictHttpResponse<CategoryItemResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/DreamCategory/UpdateCategory`,
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
  postApiDreamCategoryUpdateCategory(body?: DreamCategoryRequest): __Observable<CategoryItemResponse> {
    return this.postApiDreamCategoryUpdateCategoryResponse(body).pipe(
      __map(_r => _r.body as CategoryItemResponse)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  putApiDreamCategoryDeleteCategoryResponse(body?: number): __Observable<__StrictHttpResponse<BaseResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/DreamCategory/DeleteCategory`,
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
  putApiDreamCategoryDeleteCategory(body?: number): __Observable<BaseResponse> {
    return this.putApiDreamCategoryDeleteCategoryResponse(body).pipe(
      __map(_r => _r.body as BaseResponse)
    );
  }
}

module DreamCategoryService {
}

export { DreamCategoryService }
