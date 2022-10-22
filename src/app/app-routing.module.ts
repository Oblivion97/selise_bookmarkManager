import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookmarkComponent } from './create-bookmark/create-bookmark.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'bookmark-manager', component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'add', component: CreateBookmarkComponent }
    ]
  },
  { path: '', redirectTo: 'bookmark-manager', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
