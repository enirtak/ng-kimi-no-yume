/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ProfileResponse } from '../models/profile-response';
import { ProfileRequest } from '../models/profile-request';
import { ProfileListResponse } from '../models/profile-list-response';
import { ProfileListRequest } from '../models/profile-list-request';
@Injectable({
  providedIn: 'root',
})
class ProfileService extends __BaseService {
  static readonly postApiProfileCreateProfilePath = '/api/Profile/CreateProfile';
  static readonly getApiProfileGetProfileListPath = '/api/Profile/GetProfileList';
  static readonly getApiProfileGetCurrentProfilePath = '/api/Profile/GetCurrentProfile';
  static readonly putApiProfileUpdateProfilePath = '/api/Profile/UpdateProfile';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiProfileCreateProfileResponse(body?: ProfileRequest): __Observable<__StrictHttpResponse<ProfileResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Profile/CreateProfile`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProfileResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postApiProfileCreateProfile(body?: ProfileRequest): __Observable<ProfileResponse> {
    return this.postApiProfileCreateProfileResponse(body).pipe(
      __map(_r => _r.body as ProfileResponse)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  getApiProfileGetProfileListResponse(body?: ProfileListRequest): __Observable<__StrictHttpResponse<ProfileListResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Profile/GetProfileList`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProfileListResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  getApiProfileGetProfileList(body?: ProfileListRequest): __Observable<ProfileListResponse> {
    return this.getApiProfileGetProfileListResponse(body).pipe(
      __map(_r => _r.body as ProfileListResponse)
    );
  }

  /**
   * @return Success
   */
  getApiProfileGetCurrentProfileResponse(): __Observable<__StrictHttpResponse<ProfileResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Profile/GetCurrentProfile`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProfileResponse>;
      })
    );
  }
  /**
   * @return Success
   */
  getApiProfileGetCurrentProfile(): __Observable<ProfileResponse> {
    return this.getApiProfileGetCurrentProfileResponse().pipe(
      __map(_r => _r.body as ProfileResponse)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  putApiProfileUpdateProfileResponse(body?: ProfileRequest): __Observable<__StrictHttpResponse<ProfileResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Profile/UpdateProfile`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProfileResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  putApiProfileUpdateProfile(body?: ProfileRequest): __Observable<ProfileResponse> {
    return this.putApiProfileUpdateProfileResponse(body).pipe(
      __map(_r => _r.body as ProfileResponse)
    );
  }
}

module ProfileService {
}

export { ProfileService }
