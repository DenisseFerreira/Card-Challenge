import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './component/card/card.component';


const routes: Routes = [
/*  { path: '', redirectTo: '/start', pathMatch: 'full'}, */
  { path: ' ', component: AppComponent},
  { path: 'game', component: CardComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
