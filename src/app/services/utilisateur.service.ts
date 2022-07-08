import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../interfaces/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private url: string = "http://localhost:5555/utilisateurs";
  constructor(private http: HttpClient) { }

  checkUser(u: Utilisateur) {
    return this.http.get<Utilisateur[]>(`${this.url}?nom=${u.nom}&motDePasse=${u.motDePasse}`);
  }
}
