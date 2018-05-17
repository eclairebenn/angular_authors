import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayComponent } from './display/display.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { QuoteComponent } from './quote/quote.component';

const routes: Routes = [
  { path: '', component: DisplayComponent },
  { path: 'new', component: AddComponent },
  { path: 'quotes/:id', component: EditComponent },
  { path: 'write/:id', component: QuoteComponent },
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '**', component: DisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
