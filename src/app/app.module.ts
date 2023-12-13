import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared/shared.module';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './modules/features/admin/login/login.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './interceptors/error/error.interceptor';
import { SpinnerInterceptor } from './interceptors/spinner/spinner.interceptor';
import { Settings } from 'src/settings/settings';
import { HomeDictionaryComponent } from './modules/features/home-dictionary/home-dictionary.component';
import { tokenGetter } from 'src/settings/token-getter';
import { AuthInterceptor } from './interceptors/auth/auth.interceptor';
import { AuthGuardService } from './services/auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HomeDictionaryComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [Settings.APIUrl],
        disallowedRoutes: []
      }
    })
  ],
  providers: [
    // AuthGuardService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
