import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/interfaces/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  utilisateur: Utilisateur = {};
  isConnected = false;
  constructor(private us: UtilisateurService) { }

  ngOnInit(): void {
  }
  seConnecter() {
    this.us.checkUser(this.utilisateur).subscribe(res => {
      if (res.length > 0) {
        this.isConnected = true;
        const userString = JSON.stringify(res[0]); // convertir l'objet en string
        this.utilisateur = res[0];
        localStorage.setItem('user', userString); // stocker l'objet dans le localStorage
      }
    })
  }
  seDeconnecter() {
    this.isConnected = false;
    localStorage.removeItem('user');


  }
}
