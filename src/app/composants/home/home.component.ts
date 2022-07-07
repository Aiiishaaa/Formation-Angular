import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stagiaire } from 'src/app/interfaces/stagiaire';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nom = "Washington";
  prenom = "Denzel";
  city = "Nice"
  zipCode = "06000";
  streetName = "paradis";
  title = 'formation-angular';
  tab: number[] = [2, 5, 3, 8];
  moyennes: number[] = [12, 5, 16, 18];
  stagiaire: Stagiaire = { num: 100, nom: "wick", prenom: "john" };
  stagiaires: Stagiaire[] = [
    { num: 100, nom: "wick", prenom: "john" },
    { num: 200, nom: "dalton", prenom: "jack" },
    { num: 300, nom: "doe", prenom: "joe" },
    { num: 400, nom: "maggio", prenom: "sophie" },
  ]
  constructor(private router :Router){ }

  ngOnInit(): void {
  }
  direBonjour() {
    alert('bonjour');
  }

  visiter() {
    const firstname = "Kostas";
    const lastname = "Mitroglou";

    // this.router.navigate(['/stagiaire', lastname, firstname]);
    this.router.navigateByUrl(`/stagiaire/${lastname}/${firstname}`)
  }

}
