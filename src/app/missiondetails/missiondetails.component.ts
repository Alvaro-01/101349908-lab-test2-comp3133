import { Component, Input } from '@angular/core';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent {
  @Input() mission!: Mission; // Add the definite assignment assertion operator '!'
}

