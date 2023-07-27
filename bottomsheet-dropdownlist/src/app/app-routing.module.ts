import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Dropdownlist } from './drop-down-list/drop-down-list.component';

const routes: Routes = [
  { path: 'c', component: AppComponent },
  { path: 'd', component: Dropdownlist }

];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
