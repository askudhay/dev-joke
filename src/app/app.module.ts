import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubmitDevJokeComponent } from './submit-dev-joke/submit-dev-joke.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * App Routes configuration goes here
 */
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'submit-dev-joke', component: SubmitDevJokeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubmitDevJokeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
