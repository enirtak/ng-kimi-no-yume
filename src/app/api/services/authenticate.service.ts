/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { RegisterUserRequest } from '../models/register-user-request';
import { AuthenticateUserResponse } from '../models/authenticate-user-response';
import { AuthenticateUserRequest } from '../models/authenticate-user-request';
@Injectable({
  providedIn: 'root',
})
class AuthenticateService extends __BaseService {
  static readonly postApiAuthenticateRegisterUserPath = '/api/Authenticate/RegisterUser';
  static readonly postApiAuthenticateAuthenticateUserPath = '/api/Authenticate/AuthenticateUser';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param body undefined
   */
  postApiAuthenticateRegisterUserResponse(body?: RegisterUserRequest): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Authenticate/RegisterUser`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param body undefined
   */
  postApiAuthenticateRegisterUser(body?: RegisterUserRequest): __Observable<null> {
    return this.postApiAuthenticateRegisterUserResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiAuthenticateAuthenticateUserResponse(body?: AuthenticateUserRequest): __Observable<__StrictHttpResponse<AuthenticateUserResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Authenticate/AuthenticateUser`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticateUserResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postApiAuthenticateAuthenticateUser(body?: AuthenticateUserRequest): __Observable<AuthenticateUserResponse> {
    return this.postApiAuthenticateAuthenticateUserResponse(body).pipe(
      __map(_r => _r.body as AuthenticateUserResponse)
    );
  }
}

module AuthenticateService {
}

export { AuthenticateService }
