import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { HomeComponent } from './composants/home/home.component';
import { NotFoundComponent } from './composants/not-found/not-found.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adresse', component: AdresseComponent },
  { path: 'stagiaire', component: StagiaireComponent },
  { path: 'error', component: NotFoundComponent },
  { path: '**', redirectTo: '/error' }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
