import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdFormComponent } from './components/forms/td-form/td-form.component';
import { RFormComponent } from './components/forms/r-form/r-form.component';

const routes: Routes = [
  { path: '', component: TdFormComponent },
  { path: 'rform', component: RFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
