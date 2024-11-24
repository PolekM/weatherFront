import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WeatherWeekSummaryResponse } from '../../model/WeatherWeekSummaryResponse';
import { WeatherService } from '../../services/weather.service';
import { locationModel } from '../../model/locationModel';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [PanelModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnChanges{
  @Input() location: locationModel = {} as locationModel
  weatherSummary: WeatherWeekSummaryResponse = {} as WeatherWeekSummaryResponse

  constructor(private weatherService: WeatherService){ }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['location'] && this.location.latitude && this.location.longitude) {
      this.weatherService.getWeekSummary(this.location.latitude,this.location.longitude).subscribe(response => {this.weatherSummary = response})
    }
  }

}
