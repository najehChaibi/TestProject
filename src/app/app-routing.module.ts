import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartiesComponent } from './parties/parties.component';
import { DetailPartyComponent } from './Parties/detail-party/detail-party.component';
import { DoctorComponent } from './doctor/doctor.component';

const routes: Routes = [
  {
    path: 'parties', component: PartiesComponent,
    children:[
      {path: 'detailparty', component: DetailPartyComponent},
      {path: '', component: DetailPartyComponent}
    ]
  },
  {path: 'doctor', component: DoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
