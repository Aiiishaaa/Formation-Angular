import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {
  prenom = "";
  nom = "";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (resultat) => {
        this.nom = resultat.get('nom') ?? ""; // ?? c'est utilisé pour les valeurs nulles
        this.prenom = resultat.get('prenom') ?? "";
      },
      // error: () => ,
      // complete:
    })

  }

}
