import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/reducer";
import { environment } from "src/environments/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from '@ngrx/effects';
import { WykopEffects } from './store/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { MikroblogModule } from './mikroblog/mikroblog.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MikroblogPostNotFoundComponent } from './mikroblog/components/mikroblog-post-not-found/mikroblog-post-not-found.component';
  
@NgModule({
  declarations: [AppComponent],
  imports: [
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MikroblogModule,
    StoreModule.forRoot({wykop:reducer}),
    EffectsModule.forRoot([WykopEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
