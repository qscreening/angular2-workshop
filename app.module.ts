import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HomeComponent } from "./home.component";
import { Routes, RouterModule  } from '@angular/router';
import { RepoListComponent } from "./repo-list.component";

const appRoutes: Routes = [
{ path: '', component: RepoListComponent }
];

const routing = RouterModule.forRoot(appRoutes);
@NgModule({
    declarations: [
                  HomeComponent
                  ],

    imports:      [BrowserModule,
                  routing,
                  HttpModule],

    bootstrap:    [HomeComponent]
})
export class AppModule {

}
