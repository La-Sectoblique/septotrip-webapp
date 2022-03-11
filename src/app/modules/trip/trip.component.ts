import { Component, OnInit } from '@angular/core';

interface Step {
  title: string;
  description: string;
  arrivalDate: Date;
  pictures?: string[];
  poi?: string[];
}


@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

  tripName = "Voyage en Alsace"

  steps: Step[] = [{
    title: 'Mulhouse',
    description: 'Point départ du voyage. Un peu une ville de merde ta capté.',
    arrivalDate: new Date("05/02/2022"),
    pictures: [''],
    poi: ['Gare', 'rue du sauvage', 'porte jeune', 'le zoo']
  },
  {
    title: 'Altkirch',
    description: "C'est bien plus joli comme ville mdr en plus ya du bon kebab.",
    arrivalDate: new Date("06/02/2022"),
    poi: ['Istanbull kebab', 'église notre dame', 'foire sainte catherine']
  },
  {
    title: 'Strasbourg',
    description: 'Azzi viens on va o bar !',
    arrivalDate: new Date("08/02/2022"),
    poi: ['a peu près tout', 'et plus', 'la cathédrale aussi']
  }]

  selectedStep = -1;

  constructor() { }

  ngOnInit() {
  }

  selectStep(idx: number): void {
    this.selectedStep = idx;
  }

}
