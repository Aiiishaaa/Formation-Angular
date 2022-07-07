import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  numbers: number[] = [2, 3, 8, 5]; 
  index: number = 0;

  constructor(private route: ActivatedRoute) { }
 
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (resultat ) => {
        this.index = Number(resultat.get('index') ?? []) ;
      },
     error: () => {
      
          }
      // complete:
    })

  }

}