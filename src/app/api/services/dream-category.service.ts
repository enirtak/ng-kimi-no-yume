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
import { CategoryRequest } from '../models/category-request';
import { BaseResponse } from '../models/base-response';
import { DreamIdRequest } from '../models/dream-id-request';
@Injectable({
  providedIn: 'root',
})
class DreamCategoryService extends __BaseService {
  static readonly getApiDreamCategoryGetCategoriesPath = '/api/DreamCategory/GetCategories';
  static readonly postApiDreamCategoryCreateNewCategoryPath = '/api/DreamCategory/CreateNewCategory';
  static readonly postApiDreamCategoryUpdateCategoryPath = '/api/DreamCategory/UpdateCategory';
  static readonly postApiDreamCategoryDeleteCategoryPath = '/api/DreamCategory/DeleteCategory';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Creates a list of dream category.
   * @return Returns the list of dream category.
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
   * Creates a list of dream category.
   * @return Returns the list of dream category.
   */
  getApiDreamCategoryGetCategories(): __Observable<CategoryResponse> {
    return this.getApiDreamCategoryGetCategoriesResponse().pipe(
      __map(_r => _r.body as CategoryResponse)
    );
  }

  /**
   * Creates a new dream category.
   * @param body Create New Dream Category Request
   * @return Success
   */
  postApiDreamCategoryCreateNewCategoryResponse(body?: CategoryRequest): __Observable<__StrictHttpResponse<CategoryItemResponse>> {
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
   * Creates a new dream category.
   * @param body Create New Dream Category Request
   * @return Success
   */
  postApiDreamCategoryCreateNewCategory(body?: CategoryRequest): __Observable<CategoryItemResponse> {
    return this.postApiDreamCategoryCreateNewCategoryResponse(body).pipe(
      __map(_r => _r.body as CategoryItemResponse)
    );
  }

  /**
   * Updates a dream category.
   * @param body Update Dream Category Request
   * @return Returns the updated dream category.
   */
  postApiDreamCategoryUpdateCategoryResponse(body?: CategoryRequest): __Observable<__StrictHttpResponse<CategoryItemResponse>> {
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
   * Updates a dream category.
   * @param body Update Dream Category Request
   * @return Returns the updated dream category.
   */
  postApiDreamCategoryUpdateCategory(body?: CategoryRequest): __Observable<CategoryItemResponse> {
    return this.postApiDreamCategoryUpdateCategoryResponse(body).pipe(
      __map(_r => _r.body as CategoryItemResponse)
    );
  }

  /**
   * Performs soft delete on Dream Category entry.
   * @param body Delete Dream Category Request
   * @return Returns IsSuccess
   */
  postApiDreamCategoryDeleteCategoryResponse(body?: DreamIdRequest): __Observable<__StrictHttpResponse<BaseResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
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
   * Performs soft delete on Dream Category entry.
   * @param body Delete Dream Category Request
   * @return Returns IsSuccess
   */
  postApiDreamCategoryDeleteCategory(body?: DreamIdRequest): __Observable<BaseResponse> {
    return this.postApiDreamCategoryDeleteCategoryResponse(body).pipe(
      __map(_r => _r.body as BaseResponse)
    );
  }
}

module DreamCategoryService {
}

export { DreamCategoryService }
