import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShortenUrlComponent} from "./shorten-url/shorten-url.component";
import {ReportsComponent} from "./reports/reports.component";
import {AppComponent} from "./app.component";

const routes:Routes = [
    {path: '', redirectTo: 'shorten', pathMatch: 'full'},
    {path: 'shorten', component: ShortenUrlComponent},
    {path: 'reports', component: ReportsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
