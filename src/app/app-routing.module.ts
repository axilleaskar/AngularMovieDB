import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DialogComponent } from './dialog/dialog.component';
import { CollectionsComponent } from './collections/collections.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'collections', component: CollectionsComponent},
  { path: 'collections/:id', component: DialogComponent, outlet:'id2' },
  { path: ':id', component: DialogComponent, outlet: 'id' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }