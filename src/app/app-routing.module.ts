import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TableComponent} from "./components/table/table.component";
import {BeerDetailsComponent} from "./components/beer-details/beer-details.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'beer_table',
    pathMatch: 'full',
  },
  {
    path: 'beer_table',
    component: TableComponent,
  },
  {
    path: 'beer_table/beer_details/:id',
    component: BeerDetailsComponent,
  },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
