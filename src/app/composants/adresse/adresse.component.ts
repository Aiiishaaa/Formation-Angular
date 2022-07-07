import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {
  rue = "";
  ville = "";
  codePostal = "";
  constructor(private  route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe ((res) => {
      this.ville = res.get('ville')  ?? "";
      this.rue = res.get('rue')  ?? "";
      this.codePostal = res.get('codePostal')  ?? "";
    })
  }

}
