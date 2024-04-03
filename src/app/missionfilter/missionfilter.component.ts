import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  @Output() filterByYear = new EventEmitter<number>();

  onYearSelect(year: number) {
    this.filterByYear.emit(year);
  }
}
